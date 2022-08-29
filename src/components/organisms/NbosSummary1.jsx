// import { useState } from 'react'
import { NbosPage } from '../molecules/NbosPage'
import { NbosText } from '../atoms/NbosText'
import { dataAndCurrencyFormatter } from 'utilities'

export const NbosSummary1 = ({ summary1 }) => {
  // console.log(summary1)
  return (
    <NbosPage>
      <div className="tw-grid tw-grid-cols-3 tw-text-left tw-py-3 tw-divide-x-2">
        <div className=" tw-flex tw-flex-col tw-p-2 ">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary1.avgLoan)}`}
            size="lg"
          />
          <NbosText text="TTM Avg Loan Balance" size="xs" color="#808080" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2  ">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary1.avgCredit)}`}
            size="lg"
          />
          <NbosText
            text="TTM Avg Credit Commitments"
            size="xs"
            color="#808080"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2  ">
          <NbosText
            text={`${dataAndCurrencyFormatter(summary1.depositBal)}`}
            size="lg"
          />
          <NbosText text="Top Prospects" size="xs" color="#808080" />
        </div>
      </div>
    </NbosPage>
  )
}
