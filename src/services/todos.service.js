import http from './http.service'

class TodosDataService {
  async getAll() {
    return await http.get('http://jsonplaceholder.typicode.com/todos')
  }
}

export default new TodosDataService()
