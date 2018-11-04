<template>
  <div class="page-wrap">
		<div class="tab-block">
			<div class="tab-content">
        <div class="page f-hot active" id="movie-coming-scroll">
          <div class="list-wrap">
            <div class="most-expected">
              <p class="title">近期最受期待</p>
              <div class="most-expected-list">
                <div class="most-expected-list-wrap">
                  <div class="expected-item" v-for="item of expected" :key="item.id">
                    <div class="poster default-img-bg">
                      <img :src="item.img | replaceWH('170.230')" onerror="this.style.visibility='hidden'">
                      <span class="wish-bg"></span>
                      <span class="wish"><span class="wish-num">{{ item.wish }}</span>人想看</span>
                      <div class="toggle-wish" data-wishst="0" data-movieid="42964">
                        <span></span>
                      </div>
                    </div>
                    <h5 class="name line-ellipsis">{{ item.nm }}</h5>
                    <p class="date">{{ item.comingTitle }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="coming-list">
              <div v-for="(movies, key) of groupedMovies" :key="key">
                <p class="group-date">{{ key }}</p>
                <movie-list from="coming" :movies="movies"></movie-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
import http from 'utils/http'
import _ from 'lodash'
import { scroll } from 'utils/scroll'
import MovieList from 'components/common/movie-list/MovieList'
export default {
  data () {
    return {
      movies: [],
      expected: []
    }
  },

  components: {
    MovieList
  },

  computed: {
    groupedMovies () {
      return _(this.movies).groupBy(item => item.comingTitle).value()
    }
  },

  async mounted () {
    this.mostExpected = await http({
      method: 'get',
      url: '/ajax/mostExpected'
    })

    this.comingList = await http({
      method: 'get',
      url: '/ajax/comingList',
      params: {
        ci: 1,
        limit: 10
      }
    })

    this.movies = this.comingList.coming
    this.expected = this.mostExpected.coming

    // 为了演示Indicator 唯一实例的问题
    Indicator.close()

    // expected 滚动
    scroll({
      el: '.most-expected-list', 
      url: '/ajax/mostExpected', 
      paging: this.mostExpected.paging, 
      vm: this, 
      data: this.expected,
      type: 'horizontal'
    })

    // coming 滚动
    scroll({
      el: '#movie-coming-scroll', 
      url: '/ajax/moreComingList', 
      movieIds: _.chunk(this.comingList.movieIds.slice(10), 10), 
      vm: this, 
      data: this.movies
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/libs/movie-list.css'
@import '~styles/ellipsis.styl'
.most-expected-list-wrap
  width max-content
.line-ellipsis
  ellipsis()
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

