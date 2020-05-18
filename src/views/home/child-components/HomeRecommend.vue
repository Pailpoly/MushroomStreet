<template>
  <div class="home-recommend">
    <div v-for="item in recommend" class="recommend-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    recommend:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.home-recommend{
  width: 100%;
  display: flex;
  font-size: 14px;
  text-align: center;
  border-bottom: 7px solid #dddddd;
  padding: 10px 0px 15px;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 80px;
  margin-bottom: 10px;
}
</style>
