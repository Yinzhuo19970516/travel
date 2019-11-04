<template>
  <div class="register">
  <h1>注册</h1>
    <div class="form">
    <el-form ref="form" :model="form" label-width="1.4rem">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password1"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="form.password2"></el-input>
      </el-form-item>
    </el-form>
    </div>
  <el-button class="button" type="success">注册</el-button>
  </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
          return{
            form:{
              name:'',
              password1:'',
              password2:''
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
.register
  margin-top 10%
  h1
    text-align center
    font-size .5rem
    margin-bottom 5%
  form
    margin-left 2%
    margin-right 3%
  button
    display absolute
    margin-left 40%

</style>
