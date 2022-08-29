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
  // year: 0,
  // stage1: '',
  // stage2: '',
  // stage3: '',
  // stage4: 0,
  // bookedYtd: 0,
}
export const oppSummarySlice = createSlice({
  name: 'oppSummarySlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getOppSummary.fulfilled]: (state, action) => {
      // state.year = action.payload.year
      // state.stage1 = action.payload.stage_1
      // state.stage2 = action.payload.stage_2
      // state.stage3 = action.payload.stage_3
      // state.stage4 = action.payload.stage_4
      // state.bookedYtd = action.payload.bookedYtd
      state.y2020 = action.payload[1]
      state.y2021 = action.payload[2]
      console.log(action.payload)
    },
  },
})
export const { get } = oppSummarySlice.actions
const { reducer } = oppSummarySlice
export default reducer
