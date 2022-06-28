// import PropTypes from 'prop-types'
import { NbosPage } from './NbosPage'
import Grid from '@mui/material/Grid'

export const NbosPageset = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <NbosPage elevation={2}>{children}1</NbosPage>
      </Grid>
      <Grid container item className=" tw-flex tw-items-center ">
        <Grid item>
          <NbosPage elevation={2}>{children}2a</NbosPage>
        </Grid>
        <Grid item>
          <NbosPage elevation={2}>{children}2b</NbosPage>
        </Grid>
        <Grid item>
          <NbosPage elevation={2}>{children}2c</NbosPage>
        </Grid>
      </Grid>
    </Grid>
  )
}

// NbosPageset.propTypes = {}

// NbosPageset.defaultProps = {}
