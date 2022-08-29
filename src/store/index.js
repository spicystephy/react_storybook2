import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../components/features/counter/counterSlice'
// import todosReducer from './todosSlice'
import usersReducer from './usersSlice'
import clientsReducer from './clientsSlice'
import summary1Reducer from './summary1Slice'
import summary2Reducer from './summary2Slice'
import behaviorReducer from './behaviorSlice'
import outcomeReducer from './outcomeSlice'
import oppDetailReducer from './oppDetailSlice'
import oppSummaryReducer from './oppSummarySlice'

const reducers = {
  // counter: counterReducer,
  // todos: todosReducer,
  users: usersReducer,
  clients: clientsReducer,
  summary1: summary1Reducer,
  summary2: summary2Reducer,
  behavior: behaviorReducer,
  outcome: outcomeReducer,
  oppDetail: oppDetailReducer,
  oppSummary: oppSummaryReducer,
}

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})
