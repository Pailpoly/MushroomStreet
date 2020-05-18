<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import BS from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'

// BS.use(Pullup)
import BS from 'better-scroll';

export default {
  name: '',
  data(){
    return {
      bs:[]
    }
  },
  props: {
    click: {
      type: Boolean,
      default: false
    },
    pullupload: {
      type: Boolean,
      default: false
    },
    probetype: {
      type: Number,
      default: 0
    }
  },
  mounted(){
    //创建better-scroll对象
    this.bs=new BS('.wrapper',{
      click:this.click,
      pullUpLoad:this.pullupLoad,
      probeType:this.probetype
    }) 
    this.bs.on('scroll',(position)=>{
    //  console.log(position); 
    this.$emit('bsscroll',position)
    })
    this.bs.on('pullingUp',()=>{
      //  this.$emit('pullingup')
      
       
    })
  },
  methods: {
    // finishpullup(){
    //   this.bs.finishPullUp()
    // }
  },
  
}
</script>
<style scoped>
</style>
