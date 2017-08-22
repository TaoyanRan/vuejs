import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import message from '@/messages'
import my from '@/my'
import login from '@/login'
import hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/message', name: 'Message', component: message },
    { path: '/my', name: 'My', component: my },
    { path: '/login', name: 'Login', component: login },
    { path: '/hello', name: 'hello', component: hello },
  ]
})
