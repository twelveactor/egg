<template>
  <div>
    <h1>登录</h1>
    <form @submit.prevent="login">
      请输入：
      <input type="text" v-model="username"></input>
      <button>登录</button>
    </form>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Login",
  data() {
    return {
      username: ''
    }
  },
  methods: {
    login() {
      // axios.post(`${process.env.VUE_APP_BASE_API}/login`, {
      request.post(`/login`, {
        username: this.username
      }).then(res => {
        if (res.data.code === 20000) {
          localStorage.setItem('token', res.data.token)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>