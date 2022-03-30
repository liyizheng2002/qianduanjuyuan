<template>
  <div>
    <tab-bar :labels="labels" @change="onTabChange"/>
    <div class="question-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div>
          <router-link :to="`/question/${item.id}`" tag="div" v-for="item in question" :key="item.id" class="question-item">
            <div class="on">
              <h2>{{ item.title }}</h2>
              <div>
                <label>前端面试</label>
              </div>
            </div>
            <router-link :to="`/WriteAnswers/${item.id}`" tag="button" class="btn" @click.prevent="''">写回答</router-link>
          </router-link>
        </div>
      </van-list>
      <router-link to="/create/question" class="create-btn">提问</router-link>
    </div>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'
export default {
  name: 'home',
  components: {
    TabBar
  },
  data () {
    return {
      labels: [
        {
          id: '',
          text: '全部'
        }
      ],
      loading: false,
      finished: false,
      question: [], /* 问题列表 */
      fetchQuestionParams: {
        page: 1,
        page_size: 10,
        label_id: ''
      }
    }
  },
  created () {
    this.fetchQuestionLabel()
  },
  methods: {
    async fetchQuestionLabel () {
      const res = await this.$api.home.label()
      this.labels = this.labels.concat(res.data)
    },
    /* 获取首页的问题 */
    async fetchQuestionList () {
      const res = await this.$api.question.list(this.fetchQuestionParams)
      if (this.fetchQuestionParams.page === 1) {
        this.question = res.data
      } else {
        this.question = this.question.concat(res.data)
      }
      this.loading = false
      if (res.data.length < this.fetchQuestionParams.page_size) {
        this.finished = true
      } else {
        this.finished = false
      }
      this.fetchQuestionParams.page += 1
    },
    /* 点击标题让他换数据 */
    onTabChange (index) {
      /* 如果传的id等于点击的索引就让他重新加载数据 */
      this.fetchQuestionParams.label_id = this.labels[index].id
      this.fetchQuestionParams.page = 1
      this.fetchQuestionList()
    },
    onLoad () {
      this.fetchQuestionList()
    }
  }
}
</script>

<style lang="scss" scoped>
.question-list {
  .question-item {
    background-color: #fff;
    margin-top: 5px;
    padding: 20px 10px;
    @include flex(row);
    .on {
      flex: 1;
      h2 {
        font-size: 14px;
      }
      div {
        font-size: 14px;
        margin-top: 10px;
        label {
          font-size: 14px;
          color: red;
        }
      }
    }
    .btn {
      display: inline-block;
      padding: 0px 25px;
      background-color: rgb(67, 67, 165);
      outline: none;
      border: 0;
      border-radius: 20px;
      color: #fff;
    }
  }
  .create-btn {
    position: fixed;
    bottom: 100px;
    background-color: #ff6600;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    padding: 10px 30px;
    left: 50%;
    border-radius: 50px;
    transform: translateX(-50%);
  }
}
</style>
