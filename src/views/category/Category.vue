<template>
  <div class="category">
    <div class="top">
      <category-nav />
      <navbar class="shopList">
        <div slot="center">商品分类</div>
      </navbar>
    </div>
    <Scroll class="content left" :click="true">
      <category-shop-list :shoplist="ShopList" @itemClick="itemClick" />
    </Scroll>
    <tab-control
      :titles="['综合','新品','销量']"
      class="tab-control right"
      @tabclick="tabClick"
      v-show="isTapFixed"
      ref="tabFixed"
    />
    <Scroll class="content left" :click="true" :probeType="3" @bsscroll="cateScroll" ref="scroll">
      <category-details-top :shop-detail="ShopDetail" class="middle-right" @getHeight="getHeight" />

      <tab-control
        :titles="['综合','新品','销量']"
        class="tab-control"
        @tabclick="tabClick"
        v-show="!isTapFixed"
        ref="tabControl"
      />
      <div class="goods-list">
        <goods-list :goods="goods[currentType].list" />
      </div>
    </Scroll>
  </div>
</template>

<script>
import Navbar from "../../components/common/nav_bar/Navbar";
import Scroll from "../../components/common/batter-scroll/BetterScroll";

import CategoryNav from "./childComps/CategoryNav";
import CategoryShopList from "./childComps/CategoryShopList";
import CategoryDetailsTop from "./childComps/CategoryDetailsTop";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import { getShopList, getShopDetail } from "../../network/category";
import { getHomeGoods } from "../../network/home";
export default {
  name: "Category",
  data() {
    return {
      ShopList: [],
      currentmaitKey: 3627,
      ShopDetail: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isTapFixed: false,
      height: null
    };
  },
  components: {
    CategoryNav,
    Navbar,
    CategoryShopList,
    Scroll,
    CategoryDetailsTop,
    TabControl,
    GoodsList
  },
  created() {
    this.getShopList();
    this.getShopDetail(this.currentmaitKey);
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    itemClick(maitKey) {
      this.currentmaitKey = maitKey;
     
      this.getShopDetail(this.currentmaitKey);
    },
    getHeight(height) { this.height = height;
    },
    cateScroll(position) {
      this.isTapFixed = position.y < -this.height;
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabFixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    
    getShopList() {
      getShopList().then(res => {
        this.ShopList = res.data.category.list;
      });
    },
    getShopDetail(maitKey) {
      getShopDetail(maitKey).then(res => {
        this.ShopDetail = res.data.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.goods[type].page = page;
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.category {
  height: 100vh;
}
.shopList {
  background-color: hotpink;
  color: #fff;
}
.content {
  height: calc(100% - 138px);
}
.top {
  position: relative;
  z-index: 100;
}
.tab-control,
.goods-list {
  width: 70vw;
  margin-left: 12px;
}
.tab-control {
  background-color: #fff;
  position: relative;
  z-index: 100;
}
</style>