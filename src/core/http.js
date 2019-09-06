import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import company from 'Store/mock/company'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)

// Mock any GET request to /companies/1
// arguments for reply are (status, data, headers)
mock.onGet('/companies/1').reply(200, company)

export default axios