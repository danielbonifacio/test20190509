import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import CompanyPage from 'Pages/CompanyPage.vue' 
import CompanyData from 'Pages/CompanyData.vue' 

const routes = [
  {
    path: '/',
    component: CompanyPage
  },
  {
    path: '/data',
    component: CompanyData
  }
]

export default new Router({ routes })
