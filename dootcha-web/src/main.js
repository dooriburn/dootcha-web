import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router,  
  render : h => h(App)
})
