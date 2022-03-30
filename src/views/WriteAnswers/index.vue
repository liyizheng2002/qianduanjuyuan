<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="content"
        name='content'
        type="text"
        placeholder="详细描述"
        :rules="[{ required: true, message: '详细描述未填写' }]"
        class="detailed"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">发布</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'write-answers',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    onSubmit (value) {
      this.$api.question.answer(this.$route.params.id, {
        content: value.content
      })
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.title-input {
  @include wh(100, 50px);
  border-bottom: 1px solid #ccc;
}
.detailed {
  @include wh(100, 300px);
}
</style>
