<template>
 <div class="base-info" v-if="Object.keys(goods).length!==0">
   <!-- 标题 -->
    <div class="info-title">{{goods.title}}</div>
   <!-- 价格 -->

    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <!-- 销量 -->
    <div class="info-sales">
      <!-- <span>{{goods.colunms[0]}}</span>
      <span>{{goods.colunms[1]}}</span> -->
      <!-- <span>{{goods.services[goods.services.length-1].name}} -->
      </span>
    </div>
    <!-- 退换货 -->
    <div class="info-service">
      <span v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  data(){
    return {}
  },
  props:{
    goods:Object
  },
  
}
</script>
<style scoped>
.base-info{
  padding: 0 10px;
  margin-top: 15px;
}
.info-title{
  color: #222;
}
.info-price{
  margin-top: 15px;
}
.info-price .new-price{
  font-size: 24px;
  color: hotpink;
}
.info-price .old-price{
  font-size: 14px;
  text-decoration: line-through;
  margin-left: 8px;
}
.info-price .discount{
  background: hotpink;
  border-radius :6px ;  
  color: #ffffff;
  font-size: 12px;
  position: relative;
  top: -8px;
  padding: 4px 8px;
  font-size: 12px;
  margin-left: 10px;
}
.info-sales{
  margin-top: 15px;
  display: flex;
  border-bottom: 1px solid rgba(100,100,100,0.3);
  padding-bottom: 10px;
  justify-content: space-between;
  font-size: 14px;
}
.info-service{
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  color: #333;
  line-height: 50px;
}
.info-service img{
  width: 14px;
  height: 14px;
}
</style>
