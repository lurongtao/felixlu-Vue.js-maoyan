<template>
  <div class="home-wrap">
    <Header></Header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from 'components/layout/Header'
import TabBar from 'components/layout/TabBar'

export default {
  components: {
    Header,
    TabBar
  }
}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.home-wrap
  height 100%
  display flex
  flex-direction column
  background #fff
  main
    flex 1
    overflow hidden
</style>


