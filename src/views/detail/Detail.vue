<template>
  <div id="detail">
    <DetailNavBar @titleClick="titleClick" ref="nav"/>
    <Bscroll class="content" ref="scroll" @bsscroll="bScroll" :probetype="3">
      <DetailSwiper :top-images="topImages" />
      <DetailBaseInfo :goods="goodsInfo" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detail-info="detailInfo" @imgload="imageLoad" />
      <!-- //商品参数 -->
      <DetailParamsInfo :params-info="paramsInfo" ref="goods" />
      <DetailCommentInfo :comment-info="commentInfo" ref="comment" />
      <!-- //热门推荐 -->
      <DetailRecommendInfo :recommend-info="recommendInfo" ref="recommend" />
    </Bscroll>
    <DetailBottomBar @addCart='addCart'/>
    <BackTop v-show='isShowTop' @click.native="backTop"></BackTop>
  </div>
</template>

<script>
import Bscroll from "../../components/common/batter-scroll/BetterScroll";
import BackTop from '../../components/content/back-top/BackTop'

import {
  getDetailData,
  GoodsInfo,
  GoodsParams,
  getRecommendData
} from "../../network/detail";
import DetailNavBar from "./child-comp/DetailNavBar";
import DetailSwiper from "./child-comp/DetailSwiper";
import DetailBaseInfo from "./child-comp/DetailBaseInfo";
import DetailShopInfo from "./child-comp/DetailShopInfo";
import DetailBottomBar from "./child-comp/DetailBottomBar";
import DetailGoodsInfo from "./child-comp/DetailGoodsInfo";
import DetailParamsInfo from "./child-comp/DetailParamsInfo";
import DetailCommentInfo from "./child-comp/DetailCommentInfo";
import DetailRecommendInfo from "./child-comp/DetailRecommendInfo";


export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      positionY: [],
      currentIndex:0,
      isShowTop:false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailBottomBar,
    DetailGoodsInfo,
    Bscroll,
    BackTop,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo
  },
  created() {
    this.iid = this.$route.params.id;
    //请求详情页基本数据
    getDetailData(this.iid).then(res => {
      console.log(res);
      let data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goodsInfo = new GoodsInfo(
        data.columns,
        data.itemInfo,
        data.shopInfo
      );
      //获取商家
      this.shop = data.shopInfo;
      //商品的详情展示
      this.detailInfo = data.detailInfo;
      //商品参数
      this.paramsInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //请求热门推荐
    getRecommendData().then(res => {
      console.log(res);
      this.recommendInfo = res.data.list;
    });
  },
  mounted() {},
  updated() {},
  methods: {
    imageLoad() {
      this.$refs.scroll.bs.refresh();
      this.positionY = [];
      this.positionY.push(0),
      this.positionY.push(-this.$refs.goods.$el.offsetTop + 44);
      this.positionY.push(-this.$refs.comment.$el.offsetTop + 44);
      this.positionY.push(-this.$refs.recommend.$el.offsetTop + 44);
    },
    titleClick(index) {
      
      this.$refs.scroll.bs.scrollTo(0, this.positionY[index], 1000);
    },
    bScroll(position) {
      // console.log(position);
      let y=position.y
      for(let i in this.positionY){

        if(this.currentIndex != i&&(y < this.positionY[+i] && y > this.positionY[+i+1]&&i<this.positionY.length-1 || i==this.positionY.length-1&&y<this.positionY[+i])){
          this.currentIndex=i;
          this.$refs.nav.currentIndex=i
        }
      }
      this.isShowTop=position.y < -800
    },
    backTop(){
      this.$refs.scroll.bs.scrollTo(0,0,3000)
    },
    addCart(){
      //获取购物车需要展示的信息
      let cartInfo={}
        cartInfo.img=this.topImages[0]
        cartInfo.title=this.goodsInfo.title
        cartInfo.desc=this.goodsInfo.desc
        cartInfo.price=this.goodsInfo.highNowPrice
        cartInfo.iid=this.iid
        //将商品加入到购物车
      // this.$store.commit('addCart',cartInfo)
      this.$store.dispatch('addCart',cartInfo)
    }
  }
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 100;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
</style>
