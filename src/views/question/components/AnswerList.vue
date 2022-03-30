<template>
  <div class="answer-list">
    <div v-for="(item, index) in list" :key="index" class="answer-item">
      <div class="user">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F21042G4331941H-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644730349&t=df64c1aa5506c19aa42c2cff3e47d9a7" alt="">
        <span>李义政</span>
      </div>
      <div class="content">{{ list.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'answer-list',
  props: {
    list: []
  }
}
</script>

<style lang="scss" scoped>
.answer-list {
  .answer-item {
    background-color: #fff;
    margin-bottom: 5px;
    padding: 20px;
    .user {
      @include flex(row, center, flex-start);
      img {
        @include wh(30px, 30px);
        border-radius: 50%;
        margin-right: 10px;
      }
      span {
        font-size: 12px;
      }
    }
    .content {
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>
