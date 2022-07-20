import http from './http.service'

class Summary2Service {
  async get() {
    return await http.get('http://jsonplaceholder.typicode.com/summary2')
  }
}
export default new Summary2Service()
