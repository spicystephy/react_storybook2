import ClientsService from 'services/client.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// api call to get data for one client
export const getClientsData = createAsyncThunk('clients/get', async () => {
  const res = await ClientsService.get()
  return res.data
})

const initialState = {
  totalRelationships: 0,
  creditOnly: 0,
  topProspects: 0,
  highRelationships: 0,
  suspects: 0,
}

export const clientsSlice = createSlice({
  name: 'clientsSlice',

  initialState,

  reducers: {},

  extraReducers: {
    [getClientsData.fulfilled]: (state, action) => {
      state.totalRelationships = action.payload.relationships
      state.creditOnly = action.payload.credit_only
      state.topProspects = action.payload.top_prospects
      state.suspects = action.payload.suspects
      state.highRelationships = action.payload.high_relationships
    },
  },
})

export const { get } = clientsSlice.actions
const { reducer } = clientsSlice
export default reducer
