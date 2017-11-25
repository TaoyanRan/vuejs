import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    isLogin: false,
    isShowLogin: false,
    user: {
      id: '',
      loginname: '',
      avatar_url: '',
      accessToken: ''
    },
    userInfo: { /*用户详情*/}
  },
  mutations: {
    // 初始化
    init(state){},
    // 登陆
    login(state,userInfo){
      state.user = userInfo
      state.isLogin = true
    },
    // 退出登陆
    logout(state){
      state.isShowLogin = true
      state.isLogin = false
      state.user = { id: '', loginname: '', avatar_url: '', accessToken: ''}
    },
    // 显示登录
    showLogin(state){
      state.isShowLogin = true
    },
    // 隐藏登录
    hideLogin(state){
      state.isShowLogin = false
    },
    // 获取用户详情
    getUserInfo(state,loginname){
      axios.get('https://www.vue-js.com/api/v1/user/'+loginname).then(function (response) {
        state.userInfo = response.data.data
      })
    },
    // 主题首页 获取主题列表
    getTopics(state,setArticlesData){
      axios.get('https://www.vue-js.com/api/v1/topics').then(function (response) {
          setArticlesData(response.data.data);
      })
    },
    // 主题首页 按分类获取
    getTopicsTab(state,data){
      axios.get('https://www.vue-js.com/api/v1/topics?tab='+data.val).then(function (response) {
        data.callback(response.data.data);
      })
    },
    // 根据ID获取文章详情
    getArticleInfo(state,data){
        axios.get('https://www.vue-js.com/api/v1/topic/' + data.id).then(function (response) {
            data.callback(response.data.data)
        })
    }
  }
})

export default store
