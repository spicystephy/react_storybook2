import { NbosSummary1 } from './NbosSummary1'
import { summary1 } from '../../stories/data/testData-summary1'

export default {
  title: 'Organisms/NbosSummary1',
  component: NbosSummary1,
}

const Template = args => <NbosSummary1 {...args} />

export const Primary = Template.bind({})
Primary.args = {
  summary1: {
    avgLoan: summary1[1].ttm_avg_loan_bal,
    avgCredit: summary1[1].ttm_avg_credit_comm,
    depositBal: summary1[1].ttm_dep_bal,
  },
}
