<template>
	<div class="page-wrap">
		<div class="swiper-header movie-ad"></div>
    <div class="tab-block">
      <div class="tab-content">
        <div class="n-hot active">
          <div class="list-wrap"> 
            <movie-item v-for="value of movieList" :movie="value" :key="value.id"></movie-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem'
import BScroll from 'better-scroll'
import { http } from 'utils/http'
import _ from 'lodash'
export default {
  name: 'MovieList',

  props: ['inTheaterData'],

  data () {
    return {
      movieList: []
    }
  },

  components: {
    MovieItem
  },

  methods: {
    chunkMovieIds () {
      let data = this.inTheaterData
      let waitChunk = _.slice(data.movieIds, data.stids.length)
      this.chunks = _.chunk(waitChunk, 10)
      this.count = -1
    }
  },

  watch: {
    inTheaterData: function () {
      this.movieList = this.inTheaterData.movieList
      
      // 将分页数组重新分组
      this.chunkMovieIds()
    }
  },

  mounted () {
    let that = this
    let threshold = threshold
    let scroll = new BScroll('.tab-content', {
      probeType: 2
    })

    scroll.on('scrollEnd', async function () {
      let y = this.y,
          maxY = this.maxScrollY - y

      that.count++

      if (that.count < that.chunks.length) {
        if (maxY >= -threshold && maxY < 0) {
          this.scrollTo(0, this.maxScrollY + threshold)
        } else if (maxY >= 0) {
          // 获取数据
          let result = await http({
            url: '/ajax/moreComingList',
            params: {
              // 此处猫眼接口后端做了拦截，拿不到数据
              movieIds: that.chunks[that.count].join(',')
            }
          })
  
          that.movieList = [
            ...that.movieList,
            ...result.data.coming
          ]
    
          this.refresh()
          this.scrollTo(0, this.maxScrollY + threshold)
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/libs/movielist.css'
.page-wrap
  .tab-block
    height 100%
    .tab-content
      height 100%
      overflow hidden
</style>