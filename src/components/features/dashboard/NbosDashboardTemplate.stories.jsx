import { NbosDashboardTemplate } from './NbosDashboardTemplate'
import { users } from 'stories/data/testData-users'
import { client } from 'stories/data/testData-client'
import { summary1 } from 'stories/data/testData-summary1'
import { summary2 } from 'stories/data/testData-summary2'
import { outcomeMetrics } from 'stories/data/testData-outcomeMetrics'
import { behaviorMetrics } from 'stories/data/testData-behaviorMetrics'

export default {
  title: 'Templates/NbosDashboardTemplate',
  component: NbosDashboardTemplate,
}

const Template = args => <NbosDashboardTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {
  users,
  client,
  summary1,
  summary2,
  outcomeMetrics,
  behaviorMetrics,
}
