import './style.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { reset, retrieveTodos } from '../../../store/todosSlice'
import { useDispatch, useSelector } from 'react-redux'

export function TodosPage() {
  const useDispatchHook = () => useDispatch()
  const useAppSelector = useSelector
  const dispatch = useDispatchHook()
  const count = useAppSelector(state => state.todos.count)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>{' '}
      </header>
      <div className="App-line" />
      <section className="App-main">
        <div>
          <Button onClick={() => dispatch(retrieveTodos())}>
            Retrieve Todos
          </Button>
          <Button onClick={() => dispatch(reset())}>Reset Todos</Button>
          <div>
            Todos Count: <span>{count}</span>
          </div>
        </div>
        <Link to="/" className="App-link">
          Home Page
        </Link>
      </section>
    </div>
  )
}
