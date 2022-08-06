import http from './http.service'

class ClientService {
  async get() {
    return await http.get('http://localhost:3004/client/1')
  }
}
export default new ClientService()
