import { NbosPage } from '../molecules/NbosPage'
import { NbosText } from '../atoms/NbosText'
import {
  dataAndCurrencyFormatter,
  percentFormatter,
  currencyFormatter,
} from 'utilities'

export const NbosSummary2 = ({ summary2 }) => {
  return (
    <NbosPage>
      <div className="tw-grid tw-grid-cols-3 tw-text-left tw-py-3 ">
        <div className="tw-flex tw-flex-col tw-p-4 tw-border-r-2">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary2.revenue)}`}
            size="lg"
          />
          <NbosText text="TTM Revenue" size="sm" color="#71797E" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-4 tw-border-r-2">
          <NbosText text={`${percentFormatter(summary2.avgRaroc)}`} size="lg" />
          <NbosText text="TTM Avg Raroc" size="sm" color="#71797E" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-4 ">
          <NbosText text={`${percentFormatter(summary2.fee)}`} size="lg" />
          <NbosText
            text="Fee Equivalent + Card % Load Commit"
            size="sm"
            color="#71797E"
          />
        </div>
      </div>
    </NbosPage>
  )
}
