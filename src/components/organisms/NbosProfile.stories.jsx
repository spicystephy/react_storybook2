import { NbosProfile } from './NbosProfile'
import { users } from '../../stories/data/testData-users'

export default {
  title: 'Organisms/NbosProfile',
  component: NbosProfile,
}

const Template = args => <NbosProfile {...args} />

export const Primary = Template.bind({})
Primary.args = {
  users: {
    userName: `${users[1].first_name} ${users[1].last_name}`,
    hireDate: users[1].hire_date,
    role: users[1].role,
    teamLead: `${users[1].tl_first_name} ${users[1].tl_last_name}`,
  },
}
