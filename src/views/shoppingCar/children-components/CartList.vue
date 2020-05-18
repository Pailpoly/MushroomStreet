<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :item='item'/>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import {mapGetters} from 'vuex'
export default {
  name: 'CartList',
  data(){
    return {} 
  },
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
</style>
