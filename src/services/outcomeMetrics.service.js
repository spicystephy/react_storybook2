import http from './http.service'

class OutcomeMetricsService {
  async get() {
    return await http.get('http://localhost:3004/outcome/1')
  }
}
export default new OutcomeMetricsService()
