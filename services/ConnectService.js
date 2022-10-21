import axios from 'axios'

const apiConnect = axios.create({
  baseURL: 'https://connect.fanbase.com.br'
})
const fanpageApi = axios.create({
  baseURL: 'https://stg-fanpageapi.fantest.com.br'
})

export default {
  getUserDataFromToken (tk) {
    const header = { headers: { Authorization: `Bearer ${tk}` } }
    return fanpageApi.get('/api/identity/vozaoid', header)
  },
  validateToken (payload) {
    return fanpageApi.post('/api/tokenValidation', payload)
  }
}
