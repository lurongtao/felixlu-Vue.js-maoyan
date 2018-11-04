import BScroll from 'better-scroll'
import http from 'utils/http'
import { Toast } from 'mint-ui';

export const scroll = ({
  el, 
  url, 
  movieIds, 
  vm, 
  data, 
  type='vertical', 
  paging={}
}) => {

  // 定义滚动方向变量（用于电影板块：近期最受期待）
  let isVertical = type === 'vertical'

  // 初始化页码
  let count = isVertical ? 0 : 1

  // 声明BScroll
  let bscroll = new BScroll(el, {
    probeType: 1,
    pullUpLoad: {
      threshold: 50
    },
    scrollX: !isVertical
  })

  // 监听 pullingUp
  bscroll.on('pullingUp', async () => {
    if (count < movieIds.length) {

      // 分页的ajax请求
      let result = await http({
        url,
        method: 'get',
        params: {
          movieIds: movieIds[count].join(',')
        }
      })

      data.push(...result.coming)

      // 等待that.movies更新完毕（DOM Ready）
      vm.$nextTick(() => {
        bscroll.refresh()
        count++
      })
    } else {
      // 到底请提示
      Toast({
        message: '到底了~',
        position: 'bottom',
        duration: 2000
      });
    }
    
    // 告诉better-scroll, 可以进行下次滑动了
    bscroll.finishPullUp()
  })

  // 如果横向，自定义load方式
  if (!isVertical) {
    let finished = false
    let allLoaded = false
    bscroll.on('scrollEnd', async () => {
      if ( !allLoaded && (count === 1 || finished) ) {
        if (bscroll.maxScrollX === bscroll.x) {
          // 分页的ajax请求
          let result = await http({
            url,
            method: 'get',
            params: {
              limit: paging.limit,
              offset: count * ~~paging.limit,
              ci: 1
            }
          })

          if (result.coming.length > 0) {
            data.push(...result.coming)
  
            // 等待that.movies更新完毕（DOM Ready）
            vm.$nextTick(() => {
              bscroll.refresh()
              count++
              finished = true
            })
          } else {
            allLoaded = true
          }
        }
      }

      if (allLoaded && bscroll.maxScrollX === bscroll.x) {
        // 到底请提示
        Toast({
          message: '到头了~',
          position: 'top',
          duration: 2000
        })
      }
    })
  }
}