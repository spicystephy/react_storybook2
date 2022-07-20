import Summary1Service from 'services/summary1.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const retrieveSummary1 = createAsyncThunk(
  'summary1/retrieve',
  async () => {
    const res = await Summary1Service.get()
    return res.data
  },
)

const initialState = {
  avgLoan: '',
  avgCredit: '',
  prospects: '',
}

export const summary1Slice = createSlice({
  name: 'summary1Slice',

  initialState,

  reducers: {},
})

export const {} = summary1Slice.actions
const { reducer } = summary1Slice
export default reducer
