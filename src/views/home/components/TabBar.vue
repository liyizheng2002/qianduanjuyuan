<template>
  <div class="tab-bar">
    <van-tabs v-model="active" sticky>
      <van-tab v-for="(item, index) in labels" :key="index" :title="item.text"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    labels: Array
  },
  data () {
    return {
      active: 0
    }
  },
  watch: {
    active (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: sticky;
  top: 0;
}
</style>
