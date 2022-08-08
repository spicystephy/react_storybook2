import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { NbosDashboardTemplate } from '../../features/dashboard/NbosDashboardTemplate'
import { NbosMetrics } from 'components/organisms/NbosMetrics'
import { NbosOpportunitiesTable } from 'components/organisms/NbosOpportunitiesTable'
import { NbosHighchartsColumn } from 'components/molecules/NbosHighchartsColumn'
import { useDispatch, useSelector } from 'react-redux'
// import { user } from '../../../stories/data/testData-user'
// import { client } from '../../../stories/data/testData-client'
// import { summary1 } from '../../../stories/data/testData-summary1'
// import { summary2 } from '../../../stories/data/testData-summary2'
import { store } from 'store'
import { getClientsData } from 'store/clientsSlice'
import { getUsers } from 'store/usersSlice'
import { getSummary1 } from 'store/summary1Slice'
import { getSummary2 } from 'store/summary2Slice'
import { getOutcomeMetrics } from 'store/outcomeSlice'
import { getBehaviorMetrics } from 'store/behaviorSlice'
import { NbosSummary1 } from 'components/organisms/NbosSummary1'

export function DashboardPage() {
  const userProfile = useSelector(state => state.userProfile)
  const clientsData = useSelector(state => state.clientData)
  const summary1 = useSelector(state => state.summary1)
  const summary2 = useSelector(state => state.summary2)
  const outcomeMetrics = useSelector(state => state.outcomeMetrics)
  const behaviorMetrics = useSelector(state => state.behaviorMetrics)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(getUsers())
    await dispatch(getClientsData())
    await dispatch(getSummary1())
    await dispatch(getSummary2())
    await dispatch(getOutcomeMetrics())
    await dispatch(getBehaviorMetrics())
  }, [])

  return (
    <>
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
            {/* <NbosDashboardTemplate
              user={user}
              client={client}
              summary1={summary1}
              summary2={summary2}
            /> */}
            <NbosMetrics />
            <NbosHighchartsColumn />
            <NbosOpportunitiesTable />
          </section>
        </div>
      </main>
    </>
  )
}
