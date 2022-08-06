import http from './http.service'

class BehaviorMetricsService {
  async get() {
    return await http.get('http://localhost:3004/behavior/1')
  }
}
export default new BehaviorMetricsService()
