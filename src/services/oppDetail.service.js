import http from './http.service'

class OpportunitiesDetailService {
  async get() {
    return await http.get('http://localhost:3004/opportunities_detail')
  }
}
export default new OpportunitiesDetailService()
