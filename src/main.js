import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
