import { PropTypes } from 'prop-types'
import Avatar from '@mui/material/Avatar'

export const NbosAvatar = ({ alt, src, width, height, avatar }) => {
  return (
    <Avatar alt={alt} src={src} sx={{ width: { width }, height: { height } }} />
  )
}

NbosAvatar.PropTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  src: PropTypes.node,
}

NbosAvatar.defaultProps = {
  width: 50,
  height: 50,
  alt: 'User',
}
