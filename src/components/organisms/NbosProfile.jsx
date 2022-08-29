// import PropTypes from 'prop-types'
import { NbosAvatar } from '../atoms/NbosAvatar'
import { NbosText } from '../atoms/NbosText'
import { NbosPage } from '../molecules/NbosPage'

export const NbosProfile = ({ users, avatar }) => {
  return (
    <NbosPage elevation={2}>
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-py-8">
        <div>
          <NbosAvatar avatar={avatar} />
        </div>
        <div className="tw-py-5 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Name" size="xs" color="#808080" />
          <NbosText size="xl" text={users.userName} />
        </div>
        <div className="tw-py-5 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Hire Date" size="xs" color="#808080" />
          <NbosText text={users.hireDate} />
        </div>
        <div className="tw-py-4 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Role" size="xs" color="#808080" />
          <NbosText size="lg" text={users.role} />
        </div>
        <div className="tw-py-5 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Team Lead" size="xs" color="#808080" />
          <NbosText text={users.teamLead} />
        </div>
      </div>
    </NbosPage>
  )
}

// NbosProfile.propTypes = { users: PropTypes.object }

// NbosProfile.defaultProps = {}
