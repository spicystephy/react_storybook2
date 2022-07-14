import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from './components/pages/home'
import { EditPage } from './components/pages/edit'
import { DashboardPage } from './components/pages/dashboard'
import './styles/index.css'
import { TodosPage } from 'components/pages/todos'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/todos" element={<TodosPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
