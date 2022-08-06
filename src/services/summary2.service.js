import http from './http.service'

class Summary2Service {
  async get() {
    return await http.get('http://localhost:3004/summary2/1')
  }
}
export default new Summary2Service()
