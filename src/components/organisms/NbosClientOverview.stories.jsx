import { NbosClientOverview } from './NbosClientOverview'
import { client } from '../../stories/data/testData-client'

export default {
  title: 'Organisms/NbosClientOverview',
  component: NbosClientOverview,
}

const Template = args => <NbosClientOverview {...args} />

export const Primary = Template.bind({})
Primary.args = {
  client: {
    totalRelationships: client[0].relationships,
    creditOnly: client[0].credit_only,
    topProspects: client[0].top_prospects,
    suspects: client[0].suspects,
    highRelationships: client[0].high_relationships,
  },
}
