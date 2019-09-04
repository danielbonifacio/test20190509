// TODO: fetch from api
import company from 'Store/mock/company'

export default {
  namespaced: true,
  state: {
    selected: company
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
    }
  },
  actions: {
    selectCompany(context, company) {
      context.commit('select', company)
    }
  }
}