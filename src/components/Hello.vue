<template>
  <div id="">

    <div>
      <p>{{ state.isLogin }}</p>
      <button @click="login">登录</button>
      <button @click="logout">退出</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {

      }
    },
    components: {

    },
    computed: {
      state () {
        return this.$store.state
      }
    },
    methods: {
      login:function () {
        this.$store.commit('login')
      },
      logout:function () {
        this.$store.commit('logout')
      }

    }
  }
</script>

<style>

</style>
