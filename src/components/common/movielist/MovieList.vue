<template>
	<div class="page-wrap">
		<div class="swiper-header movie-ad"></div>
    <div class="tab-block">
      <div class="tab-content">
        <div class="page n-hot active">
          <div class="list-wrap"> 
            <movie-item></movie-item>
          </div>
        </div>
      </div>
      <div class="more"></div>
    </div>
  </div>
</template>

<script>
import MovieItem from './MovieItem'
export default {
  name: 'MovieList',
  components: {
    MovieItem
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/libs/movielist.css'
</style>