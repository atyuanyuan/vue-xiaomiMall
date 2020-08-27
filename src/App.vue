<template>
<div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    //   1.本地加载请求静态json文件形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })

    //   2.通过easy-mockeasy-mock平台实现数据mock
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })

    //   3.本地集成mockJS实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
  }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
