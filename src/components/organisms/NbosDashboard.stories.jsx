import { NbosDashboard } from './NbosDashboard'

export default {
  title: 'Organisms/NbosDashboard',
  component: NbosDashboard,
}

const Template = args => <NbosDashboard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
