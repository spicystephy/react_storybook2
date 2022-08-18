// import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Provider } from 'react-redux'
import { NbosDashboardTemplate } from '../../features/dashboard/NbosDashboardTemplate'
// import { NbosClientOverview } from 'components/organisms/NbosClientOverview'
import { useAppSelector, useAppDispatch } from 'hooks/useReduxHooks'
import { getClientsData } from 'store/clientsSlice'
import { getUsers } from 'store/usersSlice'
import { getSummary1 } from 'store/summary1Slice'
import { getSummary2 } from 'store/summary2Slice'
import { store } from '../../../store'
import { useEffect } from 'react'

export function DashboardPage() {
  const clientsData = useAppSelector(state => state.clients)
  const usersData = useAppSelector(state => state.users)
  const summary1 = useAppSelector(state => state.summary1)
  const summary2 = useAppSelector(state => state.summary2)

  // const usersData = useAppSelector(state => {
  //   return getUsers(state)
  // })
  // const summary1 = useAppSelector(state => {
  //   return getSummary1(state)
  // })
  // const summary2 = useAppSelector(state => {
  //   return getSummary2(state)
  // })
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchData() {
      await dispatch(getClientsData())
      await dispatch(getUsers())
      await dispatch(getSummary1())
      await dispatch(getSummary2())
    }
    fetchData()
  })

  return (
    <Provider store={store}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Insight
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main className="tw-mt-8">
        <div className="tw-flex tw-px-[50px]">
          <aside className="tw-min-w-[20%] tw-mr-12">
            <div className="tw-bg-slate-200 tw-h-screen" />
          </aside>
          <section className="tw-grow">
            <NbosDashboardTemplate
              client={clientsData}
              user={usersData}
              summary1={summary1}
              summary2={summary2}
            />
            {/* <NbosClientOverview client={clientsData} /> */}
          </section>
        </div>
      </main>
    </Provider>
  )
}
