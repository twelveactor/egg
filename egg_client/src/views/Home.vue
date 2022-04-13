<template>
  <div>
    <h1>数据:{{ list[1] }}</h1>
    <table border="1" cellspacing="0">
      <thead>
      <tr>
        <td>id</td>
        <td>信息</td>
        <td>创建时间</td>
        <td>更新时间</td>
      </tr>

      </thead>
      <tbody v-for="(item,index) of list" :key="index">
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.msg }}</td>
        <td>{{ item.createdAt }}</td>
        <td>{{ item.updatedAt }}</td>
      </tr>

      </tbody>
    </table>
    <button @click="loginOut">注销</button>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: 'Home',
  data() {
    return {
      message: "egg",
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    loginOut() {
      localStorage.setItem('token', '')
      location.reload()
    },
    getData() {
      // 获取token
      let token = localStorage.getItem('token')
      // axios.get(`${process.env.VUE_APP_BASE_API}/hello`, {headers: {token: token}}).then(res => {
      request.get(`/hello`, {headers: {token: token}}).then(res => {
        if (res.data.code !== 20000) {
          return '获取失败'
        }

        this.list = res.data.data
      })
    }
  }
}
</script>

<style>
table {

}
</style>
