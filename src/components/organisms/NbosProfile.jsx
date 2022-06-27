import { PropTypes } from 'prop-types'
import { NbosAvatar } from '../atoms/NbosAvatar'
import { NbosText } from '../atoms/NbosText'
import { NbosPage } from '../molecules/NbosPage'
import Grid from '@mui/material/Grid'

export const NbosProfile = ({ user, avatar }) => {
  return (
    <NbosPage elevation={2}>
      <Grid container direction="column" alignItems="center">
        <Grid className="tw-pt-2">
          <NbosAvatar avatar={avatar} />
        </Grid>
        <Grid item className="tw-py-2">
          <NbosText text="Name" size="xs" color="#808080" />
          <NbosText size="xl" text={`${user.first_name} ${user.last_name}`} />

          <NbosText text="Hire Date" size="xs" color="#808080" />
          <NbosText text={`${user.hire_date}`} />

          <NbosText text="Role" size="xs" color="#808080" />
          <NbosText size="lg" text={`${user.role}`} />

          <NbosText text="Team Lead" size="xs" color="#808080" />
          <NbosText text={`${user.tl_first_name} ${user.tl_last_name}`} />
        </Grid>
      </Grid>
    </NbosPage>
  )
}

NbosProfile.propTypes = { user: PropTypes.object }

NbosProfile.defaultProps = {}

// <NbosPage elevation={2}>
//   <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
//     <div>
//       <NbosAvatar avatar={avatar} />
//     </div>
//     <div className="tw-py-2">
//       <NbosText size="xl" text={`${user.first_name} ${user.last_name}`} />
//     </div>
//     <div className="tw-py-2">
//       <NbosText text={`${user.hire_date}`} />
//     </div>
//     <div className="tw-py-2">
//       <NbosText size="lg" text={`${user.role}`} />
//     </div>
//     <div className="tw-py-2">
//       <NbosText text={`${user.tl_first_name} ${user.tl_last_name}`} />
//     </div>
//   </div>
// </NbosPage>
