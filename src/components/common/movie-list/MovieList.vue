<template>
  <div class="list-wrap" style="margin-top: 0px;">
    <movie-item :from="from" :item="item" v-for="item of movies" :key="item.id"></movie-item>
  </div>
</template>

<script>
import MovieItem from './MovieItem'
export default {
  props: {
    movies: Array,
    from: String
  },
  components: {
    MovieItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/libs/movie-list.css'
.page-wrap
  flex 1
  .tab-block
    height 100%
    .tab-content
      height 100%
      position relative
</style>
