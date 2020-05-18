<template>
  <div class="cate-top">
    <div class="top-item" v-for="(item,index) in ShopDetail" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="getHeight" alt />
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { debounce } from "../../../commont/shake";
export default {
  name: "CategoryDetailsTop",
  data() {
    return {};
  },
  props: {
    ShopDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    getHeight: debounce(function() {
      this.$emit("getHeight", this.$el.offsetHeight);
    }, 300)
  }
};
</script>

<style scoped>
.cate-top {
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  justify-content: space-between;
  margin-left: 12px;
}
.top-item {
  width: 33.3%;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  font-size: 12px;
}
.top-item img {
  width: 100%;
  padding-bottom: 20px;
}
</style>