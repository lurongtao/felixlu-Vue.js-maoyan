<template>
  <nav>
    <ul>
      <router-link to="/movies" tag="li" active-class="active">
        <i class="yo-ico">&#xe622;</i>
        <b>电影</b>
      </router-link>
      <router-link to="/cinema" tag="li" active-class="active">
        <i class="yo-ico">&#xe6c2;</i>
        <b>影院</b>
      </router-link>
      <router-link to="/profile" tag="li" active-class="active">
        <i class="yo-ico">&#xe6b7;</i>
        <b>我的</b>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Tabbar"
}
var x = 3;
</script>
<style lang="stylus" scoped>
@import '~styles/border.styl'
@import '~styles/variables.styl'
@font-face
  font-family: 'yofont'
  src: url('~assets/fonts/tabbar/iconfont.eot')
  src: url('~assets/fonts/tabbar/iconfont.eot?#iefix') format('embedded-opentype'),
  url('~assets/fonts/tabbar/iconfont.woff') format('woff'),
  url('~assets/fonts/tabbar/iconfont.ttf') format('truetype'),
  url('~assets/fonts/tabbar/iconfont.svg#iconfont') format('svg');

nav
  height .48rem
  ul
    height 100%
    display flex
    border 1px 0 0 0, #ccc
    background #fff
    li
      flex 1
      display flex
      align-items center
      justify-content center
      flex-direction column
      i,b
        font-size .25rem
        color #696969
        font-weight 100
      i
        line-height .25rem
      b
        font-size .12rem
        line-height .18rem
      &.active i
      &.active b
        font-weight 400
        color $base-color
</style>



