import { NbosProfile } from '../../organisms/NbosProfile'
import { NbosClientOverview } from '../../organisms/NbosClientOverview'
import { NbosSummary1 } from '../../organisms/NbosSummary1'
import { NbosSummary2 } from '../../organisms/NbosSummary2'
import { NbosMetrics } from 'components/organisms/NbosMetrics'
import { NbosHighchartsColumn } from 'components/molecules/NbosHighchartsColumn'
import { NbosOpportunitiesTable } from '../../organisms/NbosOpportunitiesTable'

export const NbosDashboardTemplate = ({
  users,
  client,
  summary1,
  summary2,
  chartData,
  oppSummary,
  opportunitiesDetail,
}) => {
  return (
    <div className="tw-grid tw-grid-cols-3 tw-gap-6 tw-display-inline-block tw-mb-8">
      <div className="tw-col-span-1">
        <NbosProfile users={users} />
      </div>
      <div className="tw-grid tw-col-span-11 tw-gap-8">
        <NbosClientOverview client={client} />
        <NbosSummary1 summary1={summary1} />
        <NbosSummary2 summary2={summary2} />
      </div>
      <div className="tw-grid tw-col-span-12 tw-gap-8">
        <NbosMetrics chartData={chartData} users={users} />
        <NbosHighchartsColumn oppSummary={oppSummary} />
        <NbosOpportunitiesTable opportunitiesDetail={opportunitiesDetail} />
      </div>
    </div>
  )
}
