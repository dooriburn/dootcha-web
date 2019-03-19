import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router.js'

Vue.use(Vuetify)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
