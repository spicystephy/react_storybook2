import http from './http.service'

class ClientService {
  async get() {
    return await http.get('http://jsonplaceholder.typicode.com/client')
  }
}
export default new ClientService()
