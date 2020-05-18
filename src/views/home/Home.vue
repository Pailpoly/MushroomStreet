<template>
  <div id="home">
    <Navbar>
      <div slot="center">蘑菇街</div>
    </Navbar>
     <Tab-control :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabClick" v-show="isTabFixed" ref='tabFixed'>
     </Tab-control>
    <BetterScroll :click='true' :pullupload="true" :probetype='3' class="better-scroll" ref='scroll' @bsscroll='homeScroll'>
      <HomeSwiper :banners="banners"></HomeSwiper>
      <HomeRecommend :recommend="recommend"></HomeRecommend>
      <HomePopular></HomePopular>
      <Tab-control :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabClick" v-show="!isTabFixed" ref='tabContent'></Tab-control>
      <GoodsList :goods="goods[currentType].list" ></GoodsList>
    </BetterScroll>
    <BackTop v-show='isShowTop' @click.native="backTop"></BackTop>
  </div>
</template>

<script>
//公共组件
import Navbar from "../../components/common/nav_bar/Navbar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";
import BetterScroll from "../../components/common/batter-scroll/BetterScroll";
import BackTop from '../../components/content/back-top/BackTop'
//home的子组件

import HomeSwiper from "./child-components/HomeSwiper";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import HomeRecommend from "./child-components/HomeRecommend";
import HomePopular from "./child-components/HomePopular";
export default {
  name: "",
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowTop:false,
      isTabFixed:false,
      
    };
  },
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // this.$refs.scroll.finishpullup()
      })
      // .catch(err=> {
      //   this.$refs.scroll.finishpullup()
      // })
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
      }
      this.$refs.tabFixed.currentIndex = index
      this.$refs.tabContent.currentIndex = index
    },
    homeScroll(position){
      // console.log(position);
      this.isShowTop=position.y < -800
      this.isTabFixed=position.y < -651
      
    },
    backTop(){
      this.$refs.scroll.bs.scrollTo(0,0,3000)
    },
    // loadMore(){
    //   this.getHomeGoods(this.currentType)
    // }
   
  }
};
</script>
<style scoped>
#home{
  height: 100vh;
  text-align: center;
  font-weight: bold;
  color: #000;
}
.nav-bar{
  background: pink;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
   z-index: 10;
}
.tab-control { 
  position: sticky;
 top: 40px;

}
.better-scroll{
  height: calc(100% - 94px);
  overflow: hidden;
}
</style>
