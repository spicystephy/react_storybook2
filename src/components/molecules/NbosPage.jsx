// import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'

export const NbosPage = ({ children, elevation, bgColor }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{ bgcolor: `${bgColor}` }}
      // className="tw-flex tw-w-full tw-h-full tw-justify-center tw-items-center"
    >
      {children}
    </Paper>
  )
}

// NbosPage.propTypes = {
//   elevation: PropTypes.number,
//   bgColor: PropTypes.string,
//   rounded: PropTypes.bool,
// }
// NbosPage.propTypes = {
//   elevation: 3,
//   bgColor: '#ff0000',
//   rounded: true,
//   children: 'Not provided',
// }
