import { NbosProfile } from '../../organisms/NbosProfile'
import { NbosClientOverview } from '../../organisms/NbosClientOverview'
import { NbosSummary1 } from '../../organisms/NbosSummary1'
import { NbosSummary2 } from '../../organisms/NbosSummary2'
import { NbosMetrics } from 'components/organisms/NbosMetrics'
export const NbosDashboardTemplate = ({
  user,
  client,
  summary1,
  summary2,
  metrics,
}) => {
  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-6 tw-display-inline-block">
      <div className="tw-col-span-1">
        <NbosProfile user={user} />
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
