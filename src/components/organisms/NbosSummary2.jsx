import { NbosPage } from '../molecules/NbosPage'
import { NbosText } from '../atoms/NbosText'

export const NbosSummary2 = ({ summary2 }) => {
  return (
    <NbosPage>
      <div className="tw-grid tw-grid-cols-3 tw-text-left tw-py-3 tw-divide-x-2">
        <div className="tw-flex tw-flex-col tw-p-2 ">
          <NbosText text={summary2.ttm_revenue} size="lg" />
          <NbosText text="TTM Revenue" size="xs" color="#808080" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2 ">
          <NbosText text={summary2.ttm_avg_raroc} size="lg" />
          <NbosText text="TTM Avg Raroc" size="xs" color="#808080" />
        </div>
        <div className="tw-flex tw-flex-col tw-p-2 ">
          <NbosText
            text={summary2.fee_equivalent_card_percent_load_commit}
            size="lg"
          />
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
//       <NbosText text={summary2.ttm_revenue} size="lg" />
//       <NbosText text="TTM Revenue" size="xs" color="#808080" />
//     </Grid>
//     <Grid item>
//       <NbosText text={summary2.ttm_avg_raroc} size="lg" />
//       <NbosText text="TTM Avg Raroc" size="xs" color="#808080" />
//     </Grid>
//     <Grid item>
//       <NbosText
//         text={summary2.fee_equivalent_card_percent_load_commit}
//         size="lg"
//       />
//       <NbosText
//         text="Fee Equivalent + Card % Load Commit"
//         size="xs"
//         color="#808080"
//       />
//     </Grid>
//   </Grid>
// </NbosPage>
