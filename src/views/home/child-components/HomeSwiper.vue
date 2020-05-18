<template>
  <div class="home-swiper">
    <Swiper>
      <Swiper-item v-for="(item,index) in banners" :key="index">
       <a :href="item.link"><img :src="item.image" alt=""></a>
      </Swiper-item>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/swiper/index'
export default {
  name: '',
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return {}
  },
  components: {
    SwiperItem,
    Swiper
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
</style>
