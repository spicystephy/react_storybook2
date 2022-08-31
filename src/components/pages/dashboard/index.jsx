import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Provider } from 'react-redux'
import { NbosDashboardTemplate } from '../../features/dashboard/NbosDashboardTemplate'
import { useAppSelector, useAppDispatch } from 'hooks/useReduxHooks'
import { getClientsData } from 'store/clientsSlice'
import { getUsers } from 'store/usersSlice'
import { getSummary1 } from 'store/summary1Slice'
import { getSummary2 } from 'store/summary2Slice'
import { getBehaviorMetrics } from 'store/behaviorSlice'
import { getOutcomeMetrics } from 'store/outcomeSlice'
import { getOppSummary } from 'store/oppSummarySlice'
import { getOppDetail } from 'store/oppDetailSlice'
import { store } from '../../../store'

export function DashboardPage() {
  const clientsData = useAppSelector(state => state.clients)
  const usersData = useAppSelector(state => state.users)
  const summary1 = useAppSelector(state => state.summary1)
  const summary2 = useAppSelector(state => state.summary2)
  const behaviorMetrics = useAppSelector(state => state.behavior)
  const outcomeMetrics = useAppSelector(state => state.outcome)
  const oppSummary = useAppSelector(state => state.oppSummary)
  const oppDetail = useAppSelector(state => state.oppDetail)

  const chartData = { behaviorMetrics, outcomeMetrics }

  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchData() {
      await dispatch(getClientsData())
      await dispatch(getUsers())
      await dispatch(getSummary1())
      await dispatch(getSummary2())
      await dispatch(getBehaviorMetrics())
      await dispatch(getOutcomeMetrics())
      await dispatch(getOppSummary())
      await dispatch(getOppDetail())
    }
    fetchData()
  }, [])

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
              users={usersData}
              summary1={summary1}
              summary2={summary2}
              chartData={chartData}
              oppSummary={oppSummary}
              opportunitiesDetail={oppDetail}
            />
          </section>
        </div>
      </main>
    </Provider>
  )
}
//  set table to overflow=none so the list will not stretch the entire page - maybe objectFill
