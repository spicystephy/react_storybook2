import OutcomeMetricsService from 'services/outcomeMetrics.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getOutcomeMetrics = createAsyncThunk(
  'outcome_metrics/get',
  async () => {
    const res = await OutcomeMetricsService.get()
    return res.data
  },
)

const initialState = {
  loanProdY1: 0,
  loanProdY2: 0,
  depGrowthY1: 0,
  depGrowthY2: 0,
  tmGrowthY1: 0,
  tmGrowthY2: 0,
  newClientsY1: 0,
  newClientsY2: 0,
}
export const outcomeSlice = createSlice({
  name: 'outcomeSlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getOutcomeMetrics.fulfilled]: (state, action) => {
      state.loanProdY1 = action.payload.loan_prod_y1
      state.loanProdY2 = action.payload.loan_prod_y2
      state.depGrowthY1 = action.payload.dep_growth_y1
      state.depGrowthY2 = action.payload.dep_growth_y2
      state.tmGrowthY1 = action.payload.tm_growth_y1
      state.tmGrowthY2 = action.payload.tm_growth_y2
      state.newClientsY1 = action.payload.new_clients_y1
      state.newClientsY2 = action.payload.new_clients_y2
    },
  },
})
export const { get } = outcomeSlice.actions
const { reducer } = outcomeSlice
export default reducer
