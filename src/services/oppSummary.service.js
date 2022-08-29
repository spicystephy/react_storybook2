import http from './http.service'

class OpportunitySummaryService {
  async get() {
    return await http.get('http://localhost:3004/opportunities_summary')
  }
}
export default new OpportunitySummaryService()
