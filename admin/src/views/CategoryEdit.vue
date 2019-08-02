<template>
  <div class="page">
    <h1>新建分类</h1>
    <!-- 阻止表单enter后刷新页面并提交 -->
    <el-form @submit.native.prevent="saveCategory">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      model: {}
    }
  },
  components: {

  },
  methods: {
    saveCategory() {
      // eslint-disable-next-line
      console.info('触发分类名称提交!')
      // http://localhost:3000/admin/v1/api/chishenmele
      this.$axios.get('/chishenmele').then(res => {
        console.info(res)
      }).catch(err => {
        console.info(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
