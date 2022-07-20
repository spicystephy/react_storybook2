import ProfileService from 'services/profile.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const retrieveProfile = createAsyncThunk(
  'profile/retrieve',
  async () => {
    const res = await ProfileService.get()
    return res.data
  },
)

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
})

export const {} = profileSlice.actions
const { reducer } = profileSlice
export default reducer
