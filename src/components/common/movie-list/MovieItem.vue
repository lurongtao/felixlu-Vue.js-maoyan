<template>
  <div class="item">
    <div class="main-block">
      <div class="avatar" sort-flag="">
        <div class="default-img-bg">
          <img :src="item.img | replaceWH('128.180')" onerror="this.style.visibility='hidden'">		
        </div>
      </div> 
      <div class="mb-outline-b content-wrapper">
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis v3d_title">{{ item.nm }}</div>
            <span class="version" :class="item.version"></span>
            <span v-if="item.preShow" class="pre-show"></span>
          </div>
          <div class="detail column" v-if="from==='intheater'">
            <div class="score line-ellipsis"> 
              <span class="score-suffix">观众评 </span>
              <span class="grade">{{ item.sc }}</span>
            </div>
            <div class="actor line-ellipsis">{{ item.star || '影星信息暂无' }}</div>
            <div class="show-info line-ellipsis">{{ item.showInfo  }}</div>
          </div>
          <div class="detail column" v-else>
            <div class="wantsee line-ellipsis">
              <span class="person">{{ item.wish }}</span>
              <span class="p-suffix"> 人想看</span>
            </div>					
            <div class="actor line-ellipsis">{{ item.star || '影星信息暂无' }}</div>
            <div class="actor line-ellipsis">{{ item.rt }}上映</div>
          </div>
        </div>
        <div class="button-block" data-id="346015">
          <movie-button :preShow="item.preShow">
            {{ item.preShow | preShowText }}
          </movie-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieButton from './MovieButton'
export default {
  props: {
    item: Object,
    from: String
  },
  components: {
    MovieButton
  },
  filters: {
    preShowText (value) {
      return value ? '预售' : '购票'
    }
  }
}
</script>


<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'
@import '~styles/border.styl'
.line-ellipsis
  ellipsis()
.movie-title
  display flex
.content-wrapper
  height auto !important
  max-height none !important
  border 0 0 1px 0, #ccc
.default-img-bg
  img
    width .64rem
    height .8rem
</style>

