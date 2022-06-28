import { summary1 } from '../../stories/data/testData-summary'
import { NbosSummary1 } from './NbosSummary1'

export default {
  title: 'Organisms/NbosSummary1',
  component: NbosSummary1,
}

const Template = args => <NbosSummary1 {...args} />

export const Primary = Template.bind({})
Primary.args = { summary1 }
