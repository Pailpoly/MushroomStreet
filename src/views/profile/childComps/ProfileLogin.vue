<template>
  <div class="pro-logo">
    <p>商城</p>
    <div class="pro-photo">
      <!-- <img src="../../../assets/img/profile/pro-photo.png" alt /> -->
    
      <div class="pro-r">
        <div class="left">
          <a href="logo">登录</a>/
          <a href="init">注册</a>
          <p>
            <span class="fa fa-mobile"></span>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <div class="right">＞</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLogin",
  data() {
    return {
      img: ""
    };
  },
  props: {},
  methods: {},
  watch: {},
  computed: {
    photo() {
      return this.img;
    }
  }
};
</script>

<style scoped>
@import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
.pro-logo {
  width: 100%;
  height: 150px;
  padding: 20px;
  background-color: #ff8197;
  color: #fff;
}
.pro-logo p {
  width: 100%;
  text-align: center;
}
.pro-photo {
  width: 100%;
  margin-top: 20px;
  display: flex;
}
.pro-photo img {
  width: 80px;
  margin-right: 20px;
}
.pro-photo a {
  color: #fff;
}
.pro-r {
  width: 100%;
  height: 50%;
  margin-top: 25px;
}
.left p {
  margin-top: 5px;
  font-size: 12px;
}
.fa-mobile {
  font-size: 24px;
  margin-right: 5px;
  vertical-align: middle;
}
.right {
  margin-top: 5px;
}
</style>