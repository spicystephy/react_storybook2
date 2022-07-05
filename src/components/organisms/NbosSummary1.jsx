import { NbosPage } from '../molecules/NbosPage'
import { NbosText } from '../atoms/NbosText'

export const NbosSummary1 = ({ summary1 }) => {
  return (
    <NbosPage>
      <div className="tw-grid tw-grid-cols-3 tw-text-left tw-py-3 tw-divide-x-2">
        <div className=" tw-flex tw-flex-col tw-p-2 ">
          <NbosText text={summary1.ttm_avg_loan_balance} size="lg" />
          <NbosText text="TTM Avg Loan Balance" size="xs" color="#808080" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2  ">
          <NbosText text={summary1.ttm_avg_credit_commitments} size="lg" />
          <NbosText
            text="TTM Avg Credit Commitments"
            size="xs"
            color="#808080"
          />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2  ">
          <NbosText text={summary1.ttm_deposit_balance} size="lg" />
          <NbosText text="Top Prospects" size="xs" color="#808080" />
        </div>
      </div>
    </NbosPage>
  )
}

// <NbosPage bgColor="#FAF9F6">
//   <Grid
//     container
//     xs={12}
//     direction="row"
//     spacing={6}
//     justifyContent="start"
//     alignItems="center"
//     className="tw-p-4"
//   >
//     <Grid item>
//       <NbosText text={summary1.ttm_avg_loan_balance} size="lg" />
//       <NbosText text="TTM Avg Loan Balance" size="xs" color="#808080" />
//     </Grid>
//     <Grid item>
//       <NbosText text={summary1.ttm_avg_credit_commitments} size="lg" />
//       <NbosText
//         text="TTM Avg Credit Commitments"
//         size="xs"
//         color="#808080"
//       />
//     </Grid>
//     <Grid item>
//       <NbosText text={summary1.ttm_deposit_balance} size="lg" />
//       <NbosText text="Top Prospects" size="xs" color="#808080" />
//     </Grid>
//   </Grid>
// </NbosPage>
