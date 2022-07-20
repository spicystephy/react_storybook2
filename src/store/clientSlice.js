import ClientService from 'services/client.service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const retrieveClient = createAsyncThunk('client/retrieve', async () => {
  const res = await ClientService.get()
  return res.data
})

const initialState = {
  totalRelationships: '##',
  creditOnly: '',
  topProspects: '',
  highRelationships: '',
  suspects: '',
}

export const clientSlice = createSlice({
  name: 'clientSlice',

  initialState,

  reducers: {},
})

export const {} = clientSlice.actions
const { reducer } = clientSlice
export default reducer
