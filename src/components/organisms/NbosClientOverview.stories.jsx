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
    totalRelationships: client[1].relationships,
    creditOnly: client[1].credit_only,
    topProspects: client[1].top_prospects,
    suspects: client[1].suspects,
    highRelationships: client[1].high_relationships,
  },
}
