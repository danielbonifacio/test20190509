import 'Styles/main.scss'
import Vue from 'vue'
import App from './App.vue'
import router from 'Router'
import store from 'Store'

new Vue({
  el: '#app',
  router,
  store,
  render: createElement => createElement(App)
})
