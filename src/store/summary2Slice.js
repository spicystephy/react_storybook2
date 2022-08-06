import Summary2Service from 'services/summary2.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getSummary2 = createAsyncThunk('summary2/get', async () => {
  const res = await Summary2Service.get()
  return res.data
})

const initialState = {
  ttmRevenue: 0,
  avgRaroc: 0,
  loadCommit: 0,
}

export const summary2Slice = createSlice({
  name: 'summary2Slice',

  initialState,

  reducers: {},

  extraReducers: {
    [getSummary2.fulfilled]: (state, action) => {
      state.revenue = action.payload.ttm_rev
      state.avgRaroc = action.payload.ttm_avg_raroc
      state.fee = action.payload.fee_equiv_card_load_comm
    },
  },
})

export const { get } = summary2Slice.actions
const { reducer } = summary2Slice
export default reducer
