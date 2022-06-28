import { NbosProfile } from '../../organisms/NbosProfile'
import { NbosClientOverview } from '../../organisms/NbosClientOverview'
import { NbosSummary1 } from '../../organisms/NbosSummary1'
import { NbosSummary2 } from '../../organisms/NbosSummary2'

export const NbosDashboardTemplate = ({ user, client, summary1, summary2 }) => {
  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-6">
      <div>
        <NbosProfile user={user} />
      </div>
      <div className="tw-grid tw-gap-8">
        <NbosClientOverview client={client} />
        <NbosSummary1 summary1={summary1} />
        <NbosSummary2 summary2={summary2} />
      </div>
    </div>
  )
}
