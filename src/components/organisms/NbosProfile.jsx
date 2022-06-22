import { PropTypes } from 'prop-types'
import NbosPageset from '../molecules/NbosPageset'

export const NbosProfile = ({ pages }) => {
  return <NbosPageset pages={pages} />
}

NbosProfile.propTypes = { pages: PropTypes.array }

NbosProfile.defaultProps = { pages: [] }
