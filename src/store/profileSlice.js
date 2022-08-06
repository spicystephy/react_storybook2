import ProfileService from 'services/profile.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProfile = createAsyncThunk('profile/get', async () => {
  const res = await ProfileService.get()
  return res.data
})

const initialState = {
  userName: '',
  hireDate: '',
  role: '',
  teamLead: '',
}

export const profileSlice = createSlice({
  name: 'profileSlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getProfile.fulfilled]: (state, action) => {
      state.userName = `${action.payload.first_name} ${action.payload.last_name}`
      state.hireDate = action.payload.hire_date
      state.role = action.payload.role
      state.teamLead = `${action.payload.tl_first_name} ${action.payload.tl_last_name} `
    },
  },
})

export const { get } = profileSlice.actions
const { reducer } = profileSlice
export default reducer
