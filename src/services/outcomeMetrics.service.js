import http from './http.service'

class OutcomeMetricsService {
  async get() {
    return await http.get('http://localhost:3004/outcome_metrics/1')
  }
}
export default new OutcomeMetricsService()
