import http from './http.service'

class Summary1Service {
  async get() {
    return await http.get('http://jsonplaceholder.typicode.com/summary1')
  }
}
export default new Summary1Service()
