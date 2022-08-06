import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/features/counter/counterSlice'
import todosReducer from './todosSlice'
import profileReducer from './profileSlice'
import clientReducer from './clientSlice'
import summary1Reducer from './summary1Slice'
import summary2Reducer from './summary2Slice'
import behaviorReducer from './behaviorSlice'
import outcomeReducer from './outcomeSlice'

const reducers = {
  counter: counterReducer,
  todos: todosReducer,
  profile: profileReducer,
  client: clientReducer,
  summary1: summary1Reducer,
  summary2: summary2Reducer,
  behavior: behaviorReducer,
  outcome: outcomeReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})
