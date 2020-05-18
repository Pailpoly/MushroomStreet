<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data(){
    return {
      imgLength:0,
      num:0
    }
  },
  props:{
    detailInfo:Object
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    imageLoad(){
      this.num++
      // if(this.num===this.imgLength){
        this.$emit('imgload')
      // }
      
    }
  },
  watch: {
    detailInfo(){
      this.imgLength=this.detailInfo.detailImage[0].list.length
    }
  },
}
</script>
<style scoped>
.goods-info{
  margin-top: 50px;
}
.info-desc .desc{
  margin: 10px 20px;
  font-size: 14px;
  line-height: 18px;
}
.info-key{
  margin-left: 20px;
}
.info-list img{
  width: 100%;
}
</style>
