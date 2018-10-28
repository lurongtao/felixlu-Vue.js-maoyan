<template>
<div>
  <nav>
    <div class="city-entry">
      <span>北京</span><i class="yo-ico">&#xf033;</i>
    </div>
    <div class="i-switch-hot">
      <div class="hot-item active">正在热映</div>
      <div class="hot-item">即将上映</div>
    </div>
    <div class="search-entry"><i class="yo-ico">&#xf067;</i></div>
  </nav>
  <section>
    <movie-list></movie-list>
  </section>
</div>
</template>

<script>
import MovieList from 'components/common/movielist/MovieList'
import { http } from 'utils/http'
export default {
  name: 'Movies',

  data () {
    return {
      movieList: []
    }
  },

  components: {
    MovieList
  },

  async mounted () {
    let result = await http({
      url: '/ajax/movieOnInfoList'
    })
    this.movieList = result.data.movieList
  } 
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border'
@import '~assets/styles/variables'
div
  background #fff
  display flex
  flex-direction column
  height 100%
  nav
    border 0 0 1px 0, #ccc
    display flex
    height .44rem
    .i-switch-hot
      display flex
      flex-direction row
      width 2.08rem
      .hot-item
        color #666
        flex 1
        line-height .44rem
        text-align center
        margin 0 .12rem
        font-size .15rem
        &.active
          color $base-color
          border-bottom solid .02rem $base-color
          font-weight bold
    .city-entry
    .search-entry
      display flex
      flex 1
    .city-entry
      color #666
      flex-direction row
      font-size .15rem
      font-weight 100
      align-items center
      margin-left .15rem
      i
        color #999
        line-height .15rem
    .search-entry
      color $base-color
      flex-direction row
      align-items center
      justify-content flex-end
      margin-right .15rem
      font-size .20rem
      font-weight bold
      padding-top .05rem
  section
    flex 1
</style>

