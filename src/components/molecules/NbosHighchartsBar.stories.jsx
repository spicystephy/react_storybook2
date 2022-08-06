import { NbosHighchartsBar } from './NbosHighchartsBar'
import { users } from 'stories/data/testData-users'
import { outcomeMetrics } from 'stories/data/testData-outcomeMetrics'
import { behaviorMetrics } from 'stories/data/testData-behaviorMetrics'

export default {
  title: 'Molecules/NbosHighchartsBar',
  component: NbosHighchartsBar,
}

const Template = args => <NbosHighchartsBar {...args} />

export const Outcome = Template.bind({})
Outcome.args = {
  chartName: 'outcome',
  users: {
    userName: `${users[1].first_name} ${users[1].last_name}`,
    hireDate: users[1].hire_date,
    role: users[1].role,
    teamLead: `${users[1].tl_first_name} ${users[1].tl_last_name}`,
  },
  outcomeMetrics: {
    loanProdY1: outcomeMetrics[1].loan_prod_y1,
    loanProdY2: outcomeMetrics[1].loan_prod_y2,
    depGrowthY1: outcomeMetrics[1].dep_growth_y1,
    depGrowthY2: outcomeMetrics[1].dep_growth_y2,
    tmGrowthY1: outcomeMetrics[1].tm_growth_y1,
    tmGrowthY2: outcomeMetrics[1].tm_growth_y2,
    newClientsY1: outcomeMetrics[1].new_clients_y1,
    newClientsY2: outcomeMetrics[1].new_clients_y2,
  },
}

export const Behavior = Template.bind({})
Behavior.args = {
  chartName: 'behavior',
  users: {
    userName: `${users[1].first_name} ${users[1].last_name}`,
    hireDate: users[1].hire_date,
    role: users[1].role,
    teamLead: `${users[1].tl_first_name} ${users[1].tl_last_name}`,
  },
  behaviorMetrics: {
    satisfactionY1: behaviorMetrics[1].avg_overall_rm_sat_y1,
    satisfactionY2: behaviorMetrics[1].avg_overall_rm_sat_y2,
    clientCallsY1: behaviorMetrics[1].client_calls_y1,
    clientCallsY2: behaviorMetrics[1].client_calls_y2,
    propectCallsY1: behaviorMetrics[1].prospect_calls_y1,
    propectCallsY2: behaviorMetrics[1].prospect_calls_y2,
    strategiesY1: behaviorMetrics[1].strat_uploaded_y1,
    strategiesY2: behaviorMetrics[1].strat_uploaded_y2,
  },
}
