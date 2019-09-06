import http from 'Core/http'

export const fetchCompany = (companyId) => {
  const url = `/companies/${companyId}`

  return http
    .get(url)
    .then(res => res.data)
}

export default {
  fetchCompany
}
