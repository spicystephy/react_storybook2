import Summary2Service from 'services/summary2.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const retrieveSummary2 = createAsyncThunk(
  'summary2/retrieve',
  async () => {
    const res = await Summary2Service.get()
    return res.data
  },
)

const initialState = {
  ttmRevenue: '',
  avgRaroc: '',
  loadCommit: '',
}

export const summary2Slice = createSlice({
  name: 'summary2Slice',

  initialState,

  reducers: {},
})

export const {} = summary2Slice.actions
const { reducer } = summary2Slice
export default reducer
