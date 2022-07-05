import { PropTypes } from 'prop-types'
import { NbosAvatar } from '../atoms/NbosAvatar'
import { NbosText } from '../atoms/NbosText'
import { NbosPage } from '../molecules/NbosPage'

export const NbosProfile = ({ user, avatar }) => {
  return (
    <NbosPage elevation={2}>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-8">
        <div>
          <NbosAvatar avatar={avatar} />
        </div>
        <div className="tw-py-2 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Name" size="xs" color="#808080" />
          <NbosText size="xl" text={`${user.first_name} ${user.last_name}`} />
        </div>
        <div className="tw-py-2 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Hire Date" size="xs" color="#808080" />
          <NbosText text={user.hire_date} />
        </div>
        <div className="tw-py-2 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Role" size="xs" color="#808080" />
          <NbosText size="lg" text={user.role} />
        </div>
        <div className="tw-py-2 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Team Lead" size="xs" color="#808080" />
          <NbosText text={`${user.tl_first_name} ${user.tl_last_name}`} />
        </div>
      </div>
    </NbosPage>
  )
}

NbosProfile.propTypes = { user: PropTypes.object }

NbosProfile.defaultProps = {}

// <NbosPage bgColor="#FAF9F6" elevation={2}>
//   <Grid
//     container
//     xs={12}
//     direction="column"
//     justifyContent="center"
//     alignItems="center"
//     className="tw-p-4"
//   >
//     <Grid item className="tw-pt-2">
//       <NbosAvatar avatar={avatar} />
//     </Grid>
//     <Grid item className="tw-py-2 tw-justify-items-center">
//       <NbosText text="Name" size="xs" color="#808080" />
//       <NbosText size="xl" text={`${user.first_name} ${user.last_name}`} />
//     </Grid>
//     <Grid item className="tw-py-2">
//       <NbosText text="Hire Date" size="xs" color="#808080" />
//       <NbosText text={user.hire_date} />
//     </Grid>
//     <Grid item className="tw-py-2">
//       <NbosText text="Role" size="xs" color="#808080" />
//       <NbosText size="lg" text={user.role} />
//     </Grid>
//     <Grid item className="tw-py-2">
//       <NbosText text="Team Lead" size="xs" color="#808080" />
//       <NbosText text={`${user.tl_first_name} ${user.tl_last_name}`} />
//     </Grid>
//   </Grid>
// </NbosPage>
