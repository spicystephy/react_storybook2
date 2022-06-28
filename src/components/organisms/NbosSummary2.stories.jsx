import { summary2 } from '../../stories/data/testData-summary'
import { NbosSummary2 } from './NbosSummary2'

export default {
  title: 'Organisms/NbosSummary2',
  component: NbosSummary2,
}

const Template = args => <NbosSummary2 {...args} />

export const Primary = Template.bind({})
Primary.args = { summary2 }
