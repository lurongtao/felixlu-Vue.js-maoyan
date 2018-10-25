<template>
  <div>
    <Header></Header>
    <TabContainer></TabContainer>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Header from "./Header";
import TabContainer from "./TabContainer";
import Tabbar from "./Tabbar";
export default {
  name: "Home",
  components: {
    Header,
    TabContainer,
    Tabbar
  }
};
</script>
<style lang="stylus" scoped>
</style>

