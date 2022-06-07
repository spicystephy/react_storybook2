import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { HomePage } from './components/pages/home'
import { EditPage } from './components/pages/edit'
import './styles/index.css'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

export default App
