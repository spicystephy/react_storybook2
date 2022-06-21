import PropTypes from 'prop-types'
import { NbosPage } from './NbosPage'
import Grid from '@mui/material/Grid'

export const NbosPageset = ({ pages }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, md: 8, lg: 16 }}
    >
      {pages.map(page => (
        <Grid key={page.key} item xs={4} sm={4} md={4} lg={4} xl={4}>
          <NbosPage
            className="dbPage"
            data={page.data}
            bgColor={page.bgColor}
            elevation={page.elevation}
            rounded={page.rounded}
          />
        </Grid>
      ))}
    </Grid>
  )
}

NbosPageset.propTypes = { pages: PropTypes.array }

NbosPageset.defaultProps = { pages: [] }
