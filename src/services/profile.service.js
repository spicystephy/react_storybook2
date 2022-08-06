import http from './http.service'

class ProfileService {
  async get() {
    return await http.get('http://localhost:3004/users/1')
  }
}
export default new ProfileService()
