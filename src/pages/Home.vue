<template>
  <div class="home-container">
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import '@/assets/styles/reset.css'
import Header from '@/components/layout/Header'
import Tabbar from '@/components/layout/Tabbar'
export default {
  name: "Home",
  components: {
    Header,
    Tabbar
  }
};
</script>

<style lang="stylus" scoped>
.home-container
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    overflow hidden
</style>

