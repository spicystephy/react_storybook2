// import { propTypes } from 'prop-types'
import Avatar from '@mui/material/Avatar'

export const NbosAvatar = ({ avatar, alt, src, width, height }) => {
  return (
    <Avatar alt={alt} src={src} sx={{ width: { width }, height: { height } }}>
      {avatar}
    </Avatar>
  )
}

// NbosAvatar.propTypes = {
//   width: propTypes.number,
//   height: propTypes.number,
//   alt: propTypes.string,
//   src: propTypes.node,
// }

// NbosAvatar.defaultProps = {
//   width: 50,
//   height: 50,
//   alt: 'User',
// }
