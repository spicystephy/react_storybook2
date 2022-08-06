import http from './http.service'

class UsersService {
  async get() {
    return await http.get('http://localhost:3004/users/1')
  }
}
export default new UsersService()
