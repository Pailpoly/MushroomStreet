<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" alt srcset />
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.cSells | sellsFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-all">
          <div class="all-count">{{shop.cGoods}}</div>
          <div class="all-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-center"></div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
            <td>{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
      <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object
    }
  },
  filters: {
    sellsFilter(value) {
      if (value < 10000) {
        return value;
      }
      return (value / 10000).toFixed(1) + "万";
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.shop-top {
  height: 60px;
}
.shop-top img {
  margin-left: 10px;
  height: 50px;
  vertical-align: middle;
  border: 1px solid #e4e2e2;
  border-radius: 50%;
}
.shop-top span {
  margin-left: 10px;
  display: inline-block;
  vertical-align: middle;
}

.shop-middle{
  height: 70px;
}
.shop-middle-left {
  width: 49.5vw;
  float: left;
  

}
.shop-middle-center{
  display: inline-block;
  margin-top: 10px;
  background: #e9e9e9;
  width: 0.5vw;
  height: 50px;
  border-radius: 5px;
}
.shop-middle-right {
  width: 49.5vw;
  float: right;
}
.info-sells {
  float: left;
  width: 24vw;
}
.info-all{
  float: right;
  width: 24vw;

}
.sells-count {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  
}
.all-count{
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;

}
.all-text {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}
.sells-text {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}
.shop-bottom{
  margin: 0 auto;
  width: 40vw;
  height: 30px;
  background: rgb(238, 252, 251);
  border-radius: 12px;

}
.enter-shop{
  text-align: center;
  line-height: 30px;
  margin-top: 10px;
  background: rgb(238, 252, 251);
  border-radius: 6px;
}
</style>
