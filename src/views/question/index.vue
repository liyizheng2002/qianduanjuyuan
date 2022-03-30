<template>
  <div class="page">
    <question-header :detail="detail"/>
    <div class="answer-warp">
      <header>全部回答</header>
      <answer-list :list="detail.answer"/>
    </div>
  </div>
</template>

<script>
import QuestionHeader from './components/QuestionHeader.vue'
import AnswerList from './components/AnswerList.vue'
export default {
  name: 'question',
  components: {
    QuestionHeader,
    AnswerList
  },
  data () {
    return {
      detail: {}
    }
  },
  created () {
    this.fetchQuestionDetail()
  },
  methods: {
    async fetchQuestionDetail () {
      /* 获取路由中的id */
      const id = this.$route.params.id
      const res = await this.$api.question.detail(id)
      this.detail = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  @include wh(100vw, auto);
  min-height: 100vh;
  background-color: #eee;
  .answer-warp {
    margin-top: 20px;
    header {
      font-size: 14px;
      line-height: 50px;
      padding: 2 20px;
      background-color: #fff;
      @include border-1px('bottom', #eee)
    }
  }
}
</style>
