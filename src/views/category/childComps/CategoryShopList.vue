<template>
  <div class="shop-list">
    <div
      class="list-item"
      v-for="(item,index) in shoplist"
      :key="index"
      @click="itemClick(item,index)"
      :class="{active: index==crentIndex}"
    >{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: "CategoryShopList",
  data() {
    return {
      crentIndex: 0
    };
  },
  props: {
    shoplist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(item, index) {
      this.crentIndex = index;
      this.$emit("itemClick", item.maitKey);
    }
  }
};
</script>

<style scoped>
.list-item {
  background-color: #f6f6f6;
  width: 30vw;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.shop-list {
  width: 100px;
  display: flex;
  flex-direction: column;
}
.active {
  background-color: #fff;
  border-left: 3px solid hotpink;
}
</style>