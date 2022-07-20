import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { NbosDashboardTemplate } from '../../features/dashboard/NbosDashboardTemplate'
import { user } from '../../../stories/data/testData-user'
import { client } from '../../../stories/data/testData-client'
import { summary1 } from '../../../stories/data/testData-summary1'
import { summary2 } from '../../../stories/data/testData-summary2'

export function DashboardPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1, user }}>
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
              user={user}
              client={client}
              summary1={summary1}
              summary2={summary2}
            />
          </section>
        </div>
      </main>
    </>
  )
}
