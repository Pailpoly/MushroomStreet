<template>
  <div class="goods">
    <GoodsListItem v-for='item in goods' :goodsitem='item'>
     
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  data(){
    return {}
  },
  props:{
    goods:{
      type:Array,
      defaults(){

      }
    }
  },
  components: {
    GoodsListItem
  },
  created(){},
  mounted(){
    console.log(this.goods);
  },
  methods: {
     imageLoad(){
      this.$emit('imageload')
    }

  }
}
</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3px;
}
</style>
