// TODO: fetch from api
import company from 'Store/mock/company'
import similarCompanies from 'Store/mock/similarCompanies'

export default {
  namespaced: true,
  state: {
    selected: company,
    similar: similarCompanies
  },
  mutations: {
    select(state, company) {
      state.selected = company
    }
  },
  getters: {
    selected(state) {
      return state.selected
    },
    selectedCompanyName(state) {
      return state.selected.name
    },
    selectedCompanyActivities(state) {
      return state.selected.activities
    },
    similar(state) {
      return state.similar
    }
  },
  actions: {
    selectCompany(context, company) {
      context.commit('select', company)
    }
  }
}