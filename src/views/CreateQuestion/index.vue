<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="createParams.title"
      name="title"
      placeholder="请输入问题,以问号结束"
      :rules="[{ required: true, message: '请输入问题' }]"
    />
    <van-field
      v-model="createParams.des"
      type="textarea"
      name="des"
      class="textarea"
      placeholder="问题描述清晰"
    />
    <van-field
      readonly
      clickable
      name="label_id"
      :value="label_text"
      placeholder="点击选择问题类型"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  name: 'create-question',
  data () {
    return {
      showPicker: false, /* 是否显示 */
      columns: [], /* 显示的列表,你要显示什么东西 */
      label_text: '',
      createParams: {
        title: '',
        des: '',
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
      this.columns = res.data
    },
    /* 点击确定让那个选择框里的数字称为选择的那个 */
    onConfirm (value) {
      this.createParams.label_id = value.id
      this.label_text = value.text
      this.showPicker = false
    },
    onSubmit () {
      this.$api.question.create(this.createParams).then(() => {
        this.$router.back()
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
