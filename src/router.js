import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import UserPage from './pages/UserPage.vue'

Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:uid', 
    name: 'userpage',
    component: UserPage
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
];

// const routes = baseRoutes.concat(messagesRoutes, peopleRoutes);
// const routes = baseRoutes;
export default new Router({
  mode : 'history',
  routes : baseRoutes
});
