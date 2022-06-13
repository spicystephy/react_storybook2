import { NbosDashboardTemplate } from './NbosDashboardTemplate'

export default {
  title: 'Templates/NbosDashboardTemplate',
  component: NbosDashboardTemplate,
}

const Template = args => <NbosDashboardTemplate {...args} />

export const Primary = Template.bind({})
Primary.args = {}
