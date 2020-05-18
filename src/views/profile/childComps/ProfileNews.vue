<template>
  <div class="pro-bottom">
    <div class="pro-news">
      <div class="mynews">
        <span class="fa fa-file-text"></span>
        <div>我的消息</div>
      </div>
      <div class="integral-shop">
        <span class="fa fa-shopping-bag origin"></span>
        <div>积分商城</div>
      </div>
      <div class="club-card">
        <span class="fa fa-vimeo yellow"></span>
        <div>会员卡</div>
      </div>
    </div>
    <div class="shopcart">
      <div class="mycart">
        <span class="fa fa-shopping-cart pink"></span>
        <div>我的购物车</div>
      </div>
      <div class="down-app">
        <span class="fa fa-cloud-download pink"></span>
        <div>下载购物车APP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileNews",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
.pro-bottom {
  font-size: 14px;
}
.pro-news,
.shopcart {
  border-bottom: 10px solid #eee;
  background-color: #fff;
  /* padding-left: 50px; */
}
.pro-news > div,
.shopcart > div {
  display: flex;
  height: 40px;
  line-height: 40px;
}
.pro-news > div > span,
.shopcart > div > span {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 10%;
  text-align: center;
}
.pro-news > div > div,
.shopcart > div > div {
  width: 90%;
}
.pro-news > div:nth-last-of-type(2n) > div {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.mycart > div {
  border-bottom: 1px solid #ccc;
}
.origin {
  color: #fc7b53;
}
.pink {
  color: pink;
}
.yellow {
  color: yellow;
}
</style>