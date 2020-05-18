<template>
  <div class="profile">
    <category-nav />
    <ProfileLogin />
    <ProfileMoney />
    <ProfileNews />
  </div>
</template>

<script>
import CategoryNav from "../category/childComps/CategoryNav";
import ProfileLogin from "./childComps/ProfileLogin";
import ProfileMoney from "./childComps/ProfileMoney";
import ProfileNews from "./childComps/ProfileNews";
export default {
  name: "Profile",
  components: {
    CategoryNav,
    ProfileLogin,
    ProfileMoney,
    ProfileNews
  }
};
</script>

<style scoped>
.profile {
  height: 100vh;
}
.pro-scroll {
  height: calc(100% - 50px);
}
</style>