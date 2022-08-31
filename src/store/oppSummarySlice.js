import OpportunitySummaryService from 'services/oppSummary.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getOppSummary = createAsyncThunk(
  'opportunities_summary/get',
  async () => {
    const res = await OpportunitySummaryService.get()
    return res.data
  },
)

const initialState = {
  y2020: {},
  y2021: {},
}
export const oppSummarySlice = createSlice({
  name: 'oppSummarySlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getOppSummary.fulfilled]: (state, action) => {
      state.y2020 = action.payload[1]
      state.y2021 = action.payload[2]
    },
  },
})
export const { get } = oppSummarySlice.actions
const { reducer } = oppSummarySlice
export default reducer
