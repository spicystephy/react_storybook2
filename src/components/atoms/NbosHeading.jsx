import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

export const NbosHeading = ({ children, variant }) => {
  return (
    <>
      <Typography variant={variant}>{children}</Typography>
    </>
  )
}

NbosHeading.PropTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
}

NbosHeading.defaultProps = {
  variant: 'h1',
  children: 'Heading Test',
}
