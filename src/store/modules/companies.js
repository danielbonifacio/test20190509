import similarCompanies from 'Store/mock/similarCompanies'
import companies from 'Core/services/companies'

export default {
  namespaced: true,
  state: {
    selected: null,
    similar: similarCompanies // TODO: fetch from api
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
    },
    fetchCompany(context, companyId) {
      companies.fetchCompany(companyId)
        .then(company => context.commit('select', company))
        .catch(err => console.log(err.message))
    }
  }
}