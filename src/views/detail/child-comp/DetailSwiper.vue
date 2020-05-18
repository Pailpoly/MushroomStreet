<template>
  <div>
    <Swiper class="swiper-image">
      <SwiperItem v-for='item in topImages'>
        <img :src="item" alt="" class="top-images">
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/swiper/index';
export default {
  name: 'DetailSwiper',
  data(){
    return {}
  },
  props:{
    topImages:Array
  },
  components: {
    Swiper,
    SwiperItem
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.swiper-image{
  height: 300px;
  overflow: hidden;
}
</style>
