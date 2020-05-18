<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{length}})
      </div>
    </NavBar>
    <Bscroll class="content" :click='true'>
      <cart-list />
    </Bscroll>
    
    <CartBottomBar />
  </div>
</template>

<script>
import NavBar from '../../components/common/nav_bar/Navbar'
import Bscroll from '../../components/common/batter-scroll/BetterScroll'

import CartList from './children-components/CartList';
import CartBottomBar from './children-components/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  data(){
    return {}
  },
  components: {
    NavBar,
   CartList,
   CartBottomBar,
   Bscroll
  },
  computed: {
   
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.nav-bar{
  background: hotpink;
  color: #ffffff;
}
.cart {
  height: 100vh;
}
.content{
  height: calc(100% - 138px);
}
</style>
