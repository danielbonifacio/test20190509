import Companies from 'Store/modules/companies'
import mock from 'Store/mock/company'
import services from '../core/services/companies'

const { mutations, actions } = Companies

describe('Companies Store > Mutations', () => {
  
  it('selects a new company', () => {
    const { select } = mutations
    const state = {}
    select(state, mock)
    expect(state.selected).toBe(mock)
  })

  it('should select the fetched company', async (done) => {
    jest
      .spyOn(services, 'fetchCompany')
      .mockResolvedValue({ ...mock })
    
    const commit = jest.fn()
    await actions.fetchCompany({ commit }, 1)
    expect(commit).toHaveBeenCalledWith('select', mock)
    done()
  })
})