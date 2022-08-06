import http from './http.service'

class Summary1Service {
  async get() {
    return await http.get('http://localhost:3004/summary1/1')
  }
}
export default new Summary1Service()
