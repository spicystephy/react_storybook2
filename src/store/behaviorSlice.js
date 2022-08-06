import BehaviorMetricsService from 'services/outcomeMetrics.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// api call to get data for one client
export const getBehaviorMetrics = createAsyncThunk('behavior/get', async () => {
  const res = await BehaviorMetricsService.get()
  return res.data
})

const initialState = {
  satisfactionY1: 0,
  satisfactionY2: 0,
  clientCallsY1: 0,
  clientCallsY2: 0,
  prospectCallsY1: 0,
  prospectCallsY2: 0,
  strategiesY1: 0,
  strategiesY2: 0,
}

export const behaviorSlice = createSlice({
  name: 'behaviorSlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getBehaviorMetrics.fulfilled]: (state, action) => {
      state.satisfactionY1 = action.payload.avg_overall_rm_sat_y1
      state.satisfactionY2 = action.payload.avg_overall_rm_sat_y2
      state.clientCallsY1 = action.payload.client_calls_y1
      state.clientCallsY2 = action.payload.client_calls_y2
      state.prospectCallsY1 = action.payload.prospect_calls_y1
      state.prospectCallsY2 = action.payload.prospect_calls_y2
      state.strategiesY1 = action.payload.strat_uploaded_y1
      state.strategiesY2 = action.payload.strat_uploaded_y2
    },
  },
})

export const { get } = behaviorSlice.actions
const { reducer } = behaviorSlice
export default reducer
