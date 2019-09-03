import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import companies from 'Store/modules/companies'

const state = new Vuex.Store({
  modules: {
    companies
  }
})

export default state
