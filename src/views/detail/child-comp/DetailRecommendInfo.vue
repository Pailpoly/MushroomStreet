<template>
  <div class="recommend-info">
    <div class="info-head">热门推荐</div>
    <div class="goods"> <GoodsListItem v-for="(item,index) in recommendInfo" :key="index"  :goodsitem='item'/></div>
   
  </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodsListItem'
export default {
  name: 'DetailRecommendInfo',
  data(){
    return {}
  },
  props:{
    recommendInfo:Array
  },
  components: {
    GoodsListItem
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.recommend-info{
  padding: 5px;
}
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3px 3px 45px 3px;
}
.info-head{
  font-size: 16px;
  line-height: 40px;
  padding-left: 15px;
  color: #333;
}
</style>
