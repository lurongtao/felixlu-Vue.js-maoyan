<template>
  <div class="item">
    <div class="main-block">
      <div class="avatar" sort-flag="">
        <div class="default-img-bg">
          <img src="https://p0.meituan.net/128.180/movie/ef18d29a6f6f5841f4a2dfdbcfd60a4b826961.jpg" onerror="this.style.visibility='hidden'">		
        </div>
      </div> 
      <div class="mb-outline-b content-wrapper">
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis v3dimax_title">铁血战士</div>
            <span class="version v3d imax"></span>
          </div>
          <div class="detail column">
            <div class="score line-ellipsis"> 
              <span class="score-suffix">观众评 </span>
              <span class="grade">7.5</span>
            </div>
            <div class="actor line-ellipsis">主演: 波伊德·霍布鲁克,奥立薇娅·玛恩,伊冯娜·斯特拉霍夫斯基</div>
            <div class="show-info line-ellipsis">今天204家影院放映3203场</div>
          </div>
        </div>
        <div class="button-block">
          <movie-item-button class="pre">预售</movie-item-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MovieItemButton from './MovieItemButton'
export default {
  name: 'MovieItem',
  components: {
    MovieItemButton
  }
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/ellipsis.styl'
@import '~assets/styles/border.styl'
.line-ellipsis
  ellipsis()
.movie
  height 100%
.main-block
  padding-right .15rem !important
.content-wrapper
  border 0 0 1px 0, #ccc
.movie-title
  display flex
</style>