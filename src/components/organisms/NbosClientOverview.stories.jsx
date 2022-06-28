import { client } from '../../stories/data/testData-client'
import { NbosClientOverview } from './NbosClientOverview'

export default {
  title: 'Organisms/NbosClientOverview',
  component: NbosClientOverview,
}

const Template = args => <NbosClientOverview {...args} />

export const Primary = Template.bind({})
Primary.args = { client }
