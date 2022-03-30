<template>
  <div class="switch-page">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/history">大厂面试</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'switch-tab',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.switch-page {
  @include wh(100vw, auto);
  min-height: 100vh;
  background-color: #eee;
  padding-bottom: 40px;
}
</style>
