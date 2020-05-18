<template>
  <div class="click-button" :class="{active:ischeck}" @click="checkClick">
    <img src="../../../assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CheckedButton",
  data() {
    return {};
  },
  props: {
    ischeck: Boolean
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    checkClick(){
      this.$emit('checkClick')
    }
  }
};
</script>
<style scoped>
.click-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  cursor: pointer;
}
.active {
  background: hotpink;
  border: 2px solid hotpink;
}
</style>
