import { NbosProfile } from '../../organisms/NbosProfile'
import { NbosClientOverview } from '../../organisms/NbosClientOverview'
import { NbosSummary1 } from '../../organisms/NbosSummary1'
import { NbosSummary2 } from '../../organisms/NbosSummary2'
import { NbosMetrics } from 'components/organisms/NbosMetrics'
import { useDispatch, useSelector } from 'react-redux'
import { store } from 'store'
// import { useDispatch, useSelector } from 'react-redux'
import { getSummary1 } from 'store/summary1Slice'
import { getSummary2 } from 'store/summary2Slice'
import { getUsers } from 'store/usersSlice'
import { getClientData } from 'store/clientsSlice'

export const NbosDashboardTemplate = ({
  users,
  client,
  summary1,
  summary2,
  metrics,
}) => {
  // const dispatch = useDispatch()

  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-6 tw-display-inline-block">
      <div className="tw-col-span-1">
        <NbosProfile users={users} />
      </div>
      <div className="tw-grid tw-col-span-2 tw-gap-8">
        <NbosClientOverview client={client} />
        <NbosSummary1 summary1={summary1} />
        <NbosSummary2 summary2={summary2} />
      </div>
      <div className="tw-col-span-3">
        <NbosMetrics metrics={metrics} />
      </div>
    </div>
  )
}
