import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import TodosDataService from 'services/todos.service'

const selectTodos = state => state.todos.todos
export const completedTodosSelector = createSelector([selectTodos], todos =>
  todos.filter(todo => todo.completed),
)
export const completedTodosCountSelector = createSelector(
  [selectTodos],
  todos => todos.filter(todo => todo.completed).length,
)

export const retrieveTodos = createAsyncThunk('todos/retrieve', async () => {
  const res = await TodosDataService.getAll()
  return res.data
})

const initialState = {
  isError: false,
  isLoading: false,
  count: 0,
  completedCounts: 0,
  todos: [],
  completedTodos: [],
}

export const todosSlice = createSlice({
  name: 'todosSlice',

  initialState,

  reducers: {
    reset: state => {
      state.isError = false
      state.isLoading = false
      state.count = 0
      state.completedCount = 0
      state.todos = []
      state.completedTodos = []
    },
  },

  extraReducers: builder => {
    builder.addCase(retrieveTodos.pending, state => {
      state.isError = false
      state.isLoading = true
    })

    builder.addCase(retrieveTodos.fulfilled, (state, action) => {
      state.count = action.payload.length
      state.completedCount = action.payload.filter(
        todo => todo.completed,
      ).length
      state.completedTodos = action.payload.filter(todo => todo.completed)
      state.todos = action.payload
      state.isLoading = false
    })

    builder.addCase(retrieveTodos.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { reset } = todosSlice.actions

const { reducer } = todosSlice

export default reducer
