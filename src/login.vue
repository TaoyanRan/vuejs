<template id="">

    <div class="center login">
      <mu-text-field label="accessToken" hintText="accessToken" v-model="accessTokenStr"/>
      <br>
      <a href="https://www.vue-js.com/signup">
        <mu-raised-button label="注册" class="demo-raised-button"/>
      </a>
      <mu-raised-button label="登录" class="demo-raised-button" primary @click="accessToken"/>

      <p class="remind"><a href="https://www.vue-js.com">官方网站</a>登录后，在设置页面可以看到自己的<b>accessToken</b>。<br>将<b>accessToken</b>复制，粘贴到⬆文本框，即可登录。</p>

      <mu-toast v-if="toast" message="请输入正确的 accessToken"/>
    </div>

</template>


<script>
    import axios from 'axios'
    export default{
        name: "",
        components: {
        },
        data () {
            return {
              accessTokenStr: 'f7fe10bd-e23d-470a-9e40-2e5e992e93ae',
              toast: false
            }
        },
        mounted () {
          let that = this
        },

        methods: {
          accessToken : function () {
            let that = this
            axios.post('https://www.vue-js.com/api/v1/accesstoken',{accesstoken: that.accessTokenStr}).then(function (response) {
              if(response.data.success){

                that.$store.commit('login',response.data)
                that.$store.state.user.accessToken = that.accessTokenStr

                that.$store.commit('getUserInfo',response.data.loginname)



                setTimeout(function () {
                  that.$store.commit('hideLogin')
                },500)
              }else {
                that.showToast()
              }
            })
          },
          showToast: function () {
            this.toast = true
            if (this.toastTimer) clearTimeout(this.toastTimer)
            this.toastTimer = setTimeout(() => { this.toast = false }, 3000)
          }

        }
    }

</script>


<style scoped>
.center{
  text-align: center;
}
  .login{
    padding-top: 45px;
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom: 56px;
    z-index: 100;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#7e57c2+0,cfe7fa+100 */
    background: #7e57c2; /* Old browsers */
    background: -moz-linear-gradient(top, #7e57c2 0%, #cfe7fa 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #7e57c2 0%,#cfe7fa 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #7e57c2 0%,#cfe7fa 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7e57c2', endColorstr='#cfe7fa',GradientType=0 ); /* IE6-9 */
  }
  .remind{
    padding:55px 30px 20px;
    line-height: 2em;
  }
.mu-toast{
  position: absolute;
  left:30px;
  right:30px;
  bottom: 35px;
  width: auto;
  border-radius: 0;
  background-color: rgba(210, 153, 25, 0.87);
}
</style>
