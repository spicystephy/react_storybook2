import { NbosPage } from '../molecules/NbosPage'
import Grid from '@mui/material/Grid'
import { NbosText } from '../atoms/NbosText'

export const NbosSummary1 = ({ summary1 }) => {
  return (
    <NbosPage bgColor="#FAF9F6">
      <Grid
        container
        xs={12}
        direction="row"
        spacing={6}
        justifyContent="start"
        alignItems="center"
        className="tw-p-4"
      >
        <Grid item>
          <NbosText text={summary1.ttm_avg_loan_balance} size="lg" />
          <NbosText text="TTM Avg Loan Balance" size="xs" color="#808080" />
        </Grid>
        <Grid item>
          <NbosText text={summary1.ttm_avg_credit_commitments} size="lg" />
          <NbosText
            text="TTM Avg Credit Commitments"
            size="xs"
            color="#808080"
          />
        </Grid>
        <Grid item>
          <NbosText text={summary1.ttm_deposit_balance} size="lg" />
          <NbosText text="Top Prospects" size="xs" color="#808080" />
        </Grid>
      </Grid>
    </NbosPage>
  )
}
