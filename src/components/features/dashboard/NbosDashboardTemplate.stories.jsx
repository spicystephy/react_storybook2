import { NbosDashboardTemplate } from './NbosDashboardTemplate'
import { user } from '../../../stories/data/testData-user'
import { client } from '../../../stories/data/testData-client'
import { summary1, summary2 } from '../../../stories/data/testData-summary'

export default {
  title: 'Templates/NbosDashboardTemplate',
  component: NbosDashboardTemplate,
}

const Template = args => <NbosDashboardTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = { user, client, summary1, summary2 }
