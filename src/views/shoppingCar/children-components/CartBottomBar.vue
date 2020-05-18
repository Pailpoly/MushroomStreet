<template>
  <div class="bottom-bar">
    <div class="all-checked left">
      <checked-button :ischeck="ischeck" @checkClick="allChecked" />
    </div>
    <div class="left bottom-info">
      <span class="all-ch">全选</span>
      <span class="all-price">总价:${{allPrice}}</span>
      <span class="right buy-end">去结算({{cartCount}})</span>
    </div>
  </div>
</template>

<script>
import CheckedButton from "./CheckedButton";
import { mapGetters } from "vuex";
export default {
  name: "CarBottomBar",
  data() {
    return {};
  },
  components: {
    CheckedButton
  },
  methods: {
    allChecked() {
      if (this.cartList.length !== 0) {
        //1判断是未选中按钮
        let boo = this.cartList.every(item => item.check);
        //2有未被选中的需要进行全部选中操作
        if (boo) {
          this.$store.commit("clearCheck");
        } else {
          this.$store.commit("allCheck");
        }
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    
    allPrice() {
      return this.cartList
        .filter(item => item.check)
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    cartCount() {
      return this.cartList
        .filter(item => item.check)
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    ischeck() {
      return this.cartList.every(item => {
        return item.check;
      });
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  background-color: #ddd;
  position: fixed;
  bottom: 50px;
  left: 0;
}
.all-checked {
  width: 10%;
  position: relative;
  top: 10px;
  padding-left: 10px;
}
.bottom-info {
  width: 90%;
}
span {
  line-height: 44px;
}
.all-ch {
  margin-right: 20px;
}
.all-price {
  font-size: 18px;
}
.buy-end {
  width: 100px;
  height: 44px;
  background-color: #ff4500;
  color: #fff;
  text-align: center;
}
</style>