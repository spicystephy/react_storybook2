import { NbosMetrics } from './NbosMetrics'

export default {
  title: 'organisms/NbosMetrics',
  component: 'NbosMetrics',
}

const Template = args => <NbosMetrics {...args} />

export const Primary = Template.bind({})
Primary.args = {}
