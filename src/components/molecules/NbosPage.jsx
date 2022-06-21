import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import { NbosText } from '../atoms/NbosText'

export const NbosPage = ({ data, elevation, bgColor, rounded }) => {
  return (
    <Paper
      elevation={elevation}
      square={rounded}
      sx={{ bgcolor: `${bgColor}` }}
    >
      <div className="tw-grow tw-flex tw-flex-col tw-justify-center tw-items-left">
        <NbosText style={{ marginTop: 20 }} text={data} size="lg" />
      </div>
    </Paper>
  )
}

NbosPage.propTypes = {
  elevation: PropTypes.number,
  bgColor: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.string,
}
NbosPage.propTypes = {
  elevation: 3,
  bgColor: '#ff0000',
  rounded: true,
  children: 'No children',
}
