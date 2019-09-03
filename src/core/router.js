import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import CompanyPage from 'Pages/CompanyPage.vue' 

const routes = [
  {
    path: '/',
    component: CompanyPage
  }
]

export default new Router({ routes })
