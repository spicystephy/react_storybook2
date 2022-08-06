import UsersService from 'services/users.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk('users/get', async () => {
  const res = await UsersService.get()
  return res.data
})

const initialState = {
  userName: '',
  hireDate: '',
  role: '',
  teamLead: '',
}

export const usersSlice = createSlice({
  name: 'usersSlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.userName = `${action.payload.first_name} ${action.payload.last_name}`
      state.hireDate = action.payload.hire_date
      state.role = action.payload.role
      state.teamLead = `${action.payload.tl_first_name} ${action.payload.tl_last_name} `
    },
  },
})

export const { get } = usersSlice.actions
const { reducer } = usersSlice
export default reducer
