import './style.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from 'hooks/useReduxHooks'
import {
  reset,
  retrieveTodos,
  completedTodosCountSelector,
} from '../../../store/todosSlice'

export function TodosPage() {
  // const useDispatchHook = () => useDispatch()
  // const useAppSelector = useSelector
  // const dispatch = useDispatch()
  const count = useAppSelector(state => state.todos.count)
  const completedTodosCount = useAppSelector(state => {
    return completedTodosCountSelector(state)
  })
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Dos</h1>{' '}
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
          <div>
            Completed To Dos Count: <span>{completedTodosCount}</span>
          </div>
        </div>
        <Link to="/" className="App-link">
          Home Page
        </Link>
      </section>
    </div>
  )
}
