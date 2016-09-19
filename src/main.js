import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueSocketio from 'vue-socket.io'

Vue.use(VueResource)
Vue.use(VueSocketio, 'http://localhost:3000')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
