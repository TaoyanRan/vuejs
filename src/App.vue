<template>
  <div id="app">
    <div class="container">
      <login v-if="isShowLogin"></login>
      <mu-back-top :height="200" :bottom="80" :right="20" :duration="1000"></mu-back-top>
      <router-view></router-view>
    </div>
    <div class="footer">
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
          <mu-bottom-nav-item value="/" title="主页" icon="home"/>
          <mu-bottom-nav-item value="/message" title="消息" icon="assignment"/>
          <mu-bottom-nav-item value="/my" title="我的" icon="person_pin"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>
</template>

<script>
  import login from '@/login.vue'
  export default {
    name: 'app',
    components: {
      login
    },
    data () {
      return {
        bottomNav: '/',
        bottomNavColor: 'home',
        showLogin: false
      }
    },
    computed: {
      isShowLogin () {
        return this.$store.state.isShowLogin
      }
    },
    created: function () {

    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
        this.$router.replace(val)
      }
    }
  }
</script>

<style>
  #app{
    padding-bottom: 56px;
  }
  .footer{
    width: 100%;
    position: fixed;
    left:0;
    bottom:0;
    z-index: 1;
  }
  .demo-popup-bottom {
    width: 100%;
    height:100%;
    overflow-y: auto;
  }
  img{
    max-width: 100% !important;
  }
  .myPage .itemIn .mu-item.show-left{
    padding-left: 50px;
  }
  .popModel{
    position: fixed;
    left:0;
    top:56px;
    right: 0;
    bottom:0;
    z-index: 1;
    overflow-y: auto;
  }
</style>
