<template>
  <div class="profile-money">
    <div class="balance">
      <dl>
        <dt>
          <span>0.00</span>元
        </dt>
        <dd>我的余额</dd>
      </dl>
    </div>
    <div class="discounts">
      <dl>
        <dt>
          <span>0</span>个
        </dt>
        <dd>我的优惠</dd>
      </dl>
    </div>
    <div class="integral">
      <dl>
        <dt>
          <span>0</span>分
        </dt>
        <dd>我的积分</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileMoney",
  data() {
    return {};
  }
};
</script>

<style scoped>
.profile-money {
  display: flex;
  height: 80px;
  background-color: #fff;
  border-bottom: 10px solid #eee;
}
.profile-money > div {
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
}
.profile-money > div:nth-last-of-type(2) {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
span {
  color: #ff5f40;
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
}
dt {
  margin-bottom: 5px;
}
</style>