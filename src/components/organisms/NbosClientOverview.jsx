// import PropTypes from 'prop-types'
import { NbosPage } from '../molecules/NbosPage'
import Grid from '@mui/material/Grid'
import { NbosText } from '../atoms/NbosText'

export const NbosClientOverview = ({ client }) => {
  return (
    <NbosPage>
      <Grid container direction="row">
        <Grid item>
          <NbosText text={client.total_relationships} size="2xl" />
          <NbosText text="Total Relationships" size="xs" color="#808080" />
        </Grid>
        <Grid item>
          <NbosText text={client.credit_only_relationships} size="lg" />
          <NbosText
            text="Credit Only Relationships"
            size="xs"
            color="#808080"
          />
          <NbosText text={client.relationships_low_revenue} size="lg" />
          <NbosText
            text="Relationships with <25k TTM Revenue"
            size="xs"
            color="#808080"
          />
        </Grid>
        <Grid item>
          <NbosText text={client.top_prospects} size="lg" />
          <NbosText text="Top Prospects" size="xs" color="#808080" />
          <NbosText text={client.suspects} size="lg" />
          <NbosText text="Suspects" size="xs" color="#808080" />
        </Grid>
      </Grid>
    </NbosPage>
  )
}

// NbosPageset.propTypes = {}

// NbosPageset.defaultProps = {}
