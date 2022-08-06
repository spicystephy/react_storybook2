import Summary1Service from 'services/summary1.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getSummary1 = createAsyncThunk('summary1/get', async () => {
  const res = await Summary1Service.get()
  return res.data
})

const initialState = {
  avgLoan: 0,
  avgCredit: 0,
  prospects: 0,
}

export const summary1Slice = createSlice({
  name: 'summary1Slice',

  initialState,

  reducers: {},

  extraReducers: {
    [getSummary1.fulfilled]: (state, action) => {
      state.avgLoan = action.payload.ttm_avg_loan_bal
      state.avgCredit = action.payload.ttm_avg_credit_comm
      state.depositBal = action.payload.ttm_dep_bal
    },
  },
})

export const { get } = summary1Slice.actions
const { reducer } = summary1Slice
export default reducer
