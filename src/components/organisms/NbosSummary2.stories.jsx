import { summary2 } from '../../stories/data/testData-summary2'
import { NbosSummary2 } from './NbosSummary2'

export default {
  title: 'Organisms/NbosSummary2',
  component: NbosSummary2,
}

const Template = args => <NbosSummary2 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  summary2: {
    revenue: summary2[1].ttm_rev,
    avgRaroc: summary2[1].ttm_avg_raroc,
    fee: summary2[1].fee_equiv_card_load_comm,
  },
}
