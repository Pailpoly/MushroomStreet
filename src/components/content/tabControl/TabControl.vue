<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class=" tab-control-item" @click="activeClick(index)" :class="{active:index==currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  components: {},
  created(){},
  methods: {
    activeClick(index){
      this.currentIndex=index
      this.$emit('tabclick',index)
    }}
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background: #ffffff;
}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.active{
  color: pink;
  
}
.active span{
  border-bottom: 3px solid pink;
}
.tab-control-item span{
  padding: 5px 10px ;
}
</style>
