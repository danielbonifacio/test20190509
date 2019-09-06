import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import CompanyPage from 'Pages/CompanyPage.vue' 
import CompanyData from 'Pages/CompanyData.vue' 

const routes = [
  {
    path: '/',
    component: CompanyPage,
    meta: {
      breadcrumb: 'Company page'
    }
  },
  {
    path: '/data',
    component: CompanyData,
    meta: {
      breadcrumb: 'Company data'
    }
  }
]

export default new Router({ routes })
