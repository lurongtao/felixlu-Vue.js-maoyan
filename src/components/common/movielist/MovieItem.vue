<template>
  <div class="item">
    <div class="main-block">
      <div class="avatar">
        <div class="default-img-bg">
          <img :src="movie.img | replaceWH('128.180')" />
        </div>
      </div> 
      <div class="mb-outline-b content-wrapper">
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis v3dimax_title">{{ movie.nm }}</div>
            <span class="version" :class="movie.version"></span>
          </div>
          <div class="detail column">
            <div class="score line-ellipsis"> 
              <span class="score-suffix">观众评 </span>
              <span class="grade">{{ movie.sc }}</span>
            </div>
            <div class="actor line-ellipsis">主演: {{ movie.star }}</div>
            <div class="show-info line-ellipsis">{{ movie.showInfo }}</div>
          </div>
        </div>
        <div class="button-block">
          <movie-item-button :class="{ pre: movie.preShow }">{{ movie.preShow | preShowText }}</movie-item-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MovieItemButton from './MovieItemButton'
export default {
  name: 'MovieItem',
  props: {
    movie: Object
  },
  components: {
    MovieItemButton
  },
  filters: {
    preShowText (value) {
      return value ? '预售' : '购票'
    }
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