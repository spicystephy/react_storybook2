import http from './http.service'

class ClientService {
  async get() {
    return await http.get('http://localhost:3004/clients/1')
  }
}
export default new ClientService()
