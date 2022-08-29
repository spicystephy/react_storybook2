import { NbosOpportunitiesTable } from './NbosOpportunitiesTable'
import { opportunitiesDetail } from 'stories/data/testData-oppDetails'

export default {
  title: 'Organisms/NbosOpportunitiesTable ',
  component: NbosOpportunitiesTable,
}

const Template = args => <NbosOpportunitiesTable {...args} />

export const Primary = Template.bind({})
Primary.args = { opportunitiesDetail }
