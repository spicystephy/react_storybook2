import http from './http.service'

class ProfileService {
  async get() {
    return await http.get('http://jsonplaceholder.typicode.com/profile')
  }
}
export default new ProfileService()
