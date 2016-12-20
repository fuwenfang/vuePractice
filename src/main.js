// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Link from './components/Link'
import UserProfile from './components/UserProfile'
import UserPosts from './components/UserPosts'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {
    path: '/Link/:id',
    component: Link,
    children: [
      {
        // 当 /Link/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /Link/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
