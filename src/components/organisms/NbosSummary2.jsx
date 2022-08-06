import { NbosPage } from '../molecules/NbosPage'
import { NbosText } from '../atoms/NbosText'
import { dataAndCurrencyFormatter, percentFormatter } from 'utilities'

export const NbosSummary2 = ({ summary2 }) => {
  return (
    <NbosPage>
      <div className="tw-grid tw-grid-cols-3 tw-text-left tw-py-3 tw-divide-x-2">
        <div className="tw-flex tw-flex-col tw-p-2 ">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary2.revenue)}`}
            size="lg"
          />
          <NbosText text="TTM Revenue" size="xs" color="#808080" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2 ">
          <NbosText text={`${percentFormatter(summary2.avgRaroc)}`} size="lg" />
          <NbosText text="TTM Avg Raroc" size="xs" color="#808080" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2 ">
          <NbosText text={`${percentFormatter(summary2.fee)}`} size="lg" />
          <NbosText
            text="Fee Equivalent + Card % Load Commit"
            size="xs"
            color="#808080"
          />
        </div>
      </div>
    </NbosPage>
  )
}
