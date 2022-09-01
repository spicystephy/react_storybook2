// import { useState } from 'react'
import { NbosPage } from '../molecules/NbosPage'
import { NbosText } from '../atoms/NbosText'
import { dataAndCurrencyFormatter } from 'utilities'

export const NbosSummary1 = ({ summary1 }) => {
  return (
    <NbosPage>
      <div className="tw-grid tw-grid-cols-3 tw-text-left tw-py-3 ">
        <div className=" tw-flex tw-flex-col tw-p-4 tw-border-r-2">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary1.avgLoan)}`}
            size="lg"
          />
          <NbosText text="TTM Avg Loan Balance" size="sm" color="#71797E" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-4 tw-border-r-2">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary1.avgCredit)}`}
            size="lg"
          />
          <NbosText
            text="TTM Avg Credit Commitments"
            size="sm"
            color="#71797E"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-p-4">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary1.depositBal)}`}
            size="lg"
          />
          <NbosText text="Top Prospects" size="sm" color="#71797E" />
        </div>
      </div>
    </NbosPage>
  )
}
