import propTypes from 'prop-types'
import Typography from '@mui/material/Typography'

export const NbosHeading = ({ children, variant }) => {
  return (
    <>
      <Typography variant={variant}>{children}</Typography>
    </>
  )
}

NbosHeading.propTypes = {
  variant: propTypes.string,
  children: propTypes.string,
}

NbosHeading.defaultProps = {
  variant: 'h1',
  children: 'Heading Test',
}
