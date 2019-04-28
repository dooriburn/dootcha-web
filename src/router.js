import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/AccountPage/Login.vue'
import Join from './pages/AccountPage/Join.vue'
import Home from './pages/Home.vue'
import UserPage from './pages/UserPage.vue'
import UserMainPage from './pages/UserPage/Main.vue'
import UserFollowing from './pages/UserPage/Following.vue'



Vue.use(Router)

const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/join',
    name: 'join', 
    component: Join
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user', 
    name: 'userpage',
    component: UserPage,
    children : [
      { path: '/', component : UserMainPage },
      { path: '/follow', component : UserFollowing }
    ]
  },

  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
];

export default new Router({
  mode : 'history',
  routes : baseRoutes
});
