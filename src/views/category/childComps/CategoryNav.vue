<template>
  <navbar class="CategoryNav">
    <div slot="center" class="ipt">
      <span class="fa fa-search"></span>
      <input type="text" placeholder="购物街" />
    </div>
    <div slot="right" class="refresh">
      <span class="fa fa-repeat" @click="refresh"></span>
    </div>
  </navbar>
</template>

<script>
import Navbar from "../../../components/common/nav_bar/Navbar";
export default {
  name: "CategoryNav",
  data() {
    return {};
  },
  components: {
    Navbar
  },
  methods: {
    refresh() {
      this.$router.go(0);
    }
  }
};
</script>

<style scoped>
@import "../../../assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
.CategoryNav {
  position: relative;
}
.ipt {
  width: 300px;
  position: absolute;
  left: 20px;
  color: #ccc;
}
.ipt > span {
  position: absolute;
  top: 13px;
  left: 13px;
}
.ipt input {
  width: 100%;
  height: 30px;
  border: 1px solid #efefef;
  border-radius: 3px;
  background-color: #efefef;
  padding-left: 40px;
}
.ipt input::placeholder {
  color: #ccc;
  font-size: 14px;
}
</style>