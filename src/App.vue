<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/common/tab-bar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar
  }
};
</script>

<style>
</style>
