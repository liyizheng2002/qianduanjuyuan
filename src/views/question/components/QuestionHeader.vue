<template>
  <div class="question-header">
    <h1>{{ detail.title }}</h1>
    <div class="btn-grop">
      <a href="javascript:;">邀请回答</a>
      <router-link :to="`/WriteAnswers/${this.$route.params.id}`" href="javascript:;">写回答</router-link>
      <a href="javascript:;">收藏</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-header',
  props: {
    detail: Object
  }
}
</script>

<style lang="scss" scoped>
.question-header {
  @include wh(100vw, auto);
  box-sizing: border-box;
  background-color: #fff;
  h1 {
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
  }
  .btn-grop {
    @include flex(row, center, center);
    @include border-1px('top', #eee);
    a {
      @include border-1px('left', #eee);
      flex: 1;
      font-size: 12px;
      text-align: center;
      line-height: 50px;
      color: #ff6600;
      &:first-child::after {
        content: '';
      }
    }
  }
}
</style>
