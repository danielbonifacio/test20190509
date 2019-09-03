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
    }
  },
  actions: {
    selectCompany(context, company) {
      context.commit('select', company)
    }
  }
}