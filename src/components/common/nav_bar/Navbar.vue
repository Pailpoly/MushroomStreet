<template>
  <div class="nav-bar">
    <div class="left"> <slot name="left" ></slot></div>
    <div class="center"> <slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>
<style scoped>
.nav-bar{
  width: 100%;
  display: flex; 
  height: 40px;
  line-height: 44px;
  text-align: center;
  top: 0;
  left: 0;
  position: sticky;
 
}
.nav-bar .left,.right{
  width: 60px;

}
.nav-bar .center{
  flex: 1;

}
</style>
