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
          <NbosText text="Name" size="sm" color="#71797E" />
          <NbosText size="xl" text={users.userName} />
        </div>
        <div className="tw-py-5 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Hire Date" size="sm" color="#71797E" />
          <NbosText size="lg" text={users.hireDate} />
        </div>
        <div className="tw-py-4 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Role" size="sm" color="#71797E" />
          <NbosText size="lg" text={users.role} />
        </div>
        <div className="tw-py-5 tw-flex tw-flex-col tw-text-center">
          <NbosText text="Team Lead" size="sm" color="#71797E" />
          <NbosText size="lg" text={users.teamLead} />
        </div>
      </div>
    </NbosPage>
  )
}

// NbosProfile.propTypes = { users: PropTypes.object }

// NbosProfile.defaultProps = {}
