import { NbosHighchartsColumn } from './NbosHighchartsColumn'

export default {
  title: 'Molecules/NbosHighchartsColumn',
  component: NbosHighchartsColumn,
}

const Template = args => <NbosHighchartsColumn {...args} />

export const Primary = Template.bind({})
Primary.args = {}
