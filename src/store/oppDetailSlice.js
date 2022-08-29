import OpportunitiesDetailService from 'services/oppDetail.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getOppDetail = createAsyncThunk(
  'opportunities_detail/get',
  async () => {
    const res = await OpportunitiesDetailService.get()
    return res.data
  },
)

const initialState = {
  oppDetail: [],
  // clientId: 0,
  // clientName: '',
  // productType: '',
  // salesStage: '',
  // revenue: 0,
  // dateClosed: 0,
}
export const oppDetailSlice = createSlice({
  name: 'oppDetailSlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getOppDetail.fulfilled]: (state, action) => {
      // state.clientId = action.payload.client_id
      // state.clientName = action.payload.client_name
      // state.productType = action.payload.product_type
      // state.salesStage = action.payload.sales_stage
      // state.revenue = action.payload.revenue
      // state.dateClosed = action.payload.date_closed
      state.oppDetail = action.payload
      // console.log(state.oppDetail)
    },
  },
})
export const { get } = oppDetailSlice.actions
const { reducer } = oppDetailSlice
export default reducer
