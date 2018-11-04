<template>
  <div class="page-wrap">
		<div class="tab-block">
			<div class="tab-content">
        <div class="page n-hot active" id="movie-intheater-scroll">
          <movie-list from="intheater" :movies="movies"></movie-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from 'components/common/movie-list/MovieList'
import http from 'utils/http'
import _ from 'lodash'
import { scroll } from 'utils/scroll'
import { Indicator } from 'mint-ui'

export default {
  data () {
    return {
      movies: []
    }
  },

  components: {
    MovieList
  },

  async mounted () {
    this.inTheater = await http({
      method: 'get',
      url: '/ajax/movieOnInfoList'
    })

    this.movies = this.inTheater.movieList

    // 实现滚动
    scroll({
      el: '#movie-intheater-scroll', 
      url: '/ajax/moreComingList', 
      movieIds: _.chunk(this.inTheater.movieIds.slice(12), 10), 
      vm: this, 
      data: this.movies
    })

    // 为了演示Indicator 唯一实例的问题
    Indicator.close()
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
      .page
        height 100%
        padding-right .15rem
</style>
