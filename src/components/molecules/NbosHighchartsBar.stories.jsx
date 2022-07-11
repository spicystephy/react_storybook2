import { NbosHighchartsBar } from './NbosHighchartsBar'

export default {
  title: 'Molecules/NbosHighchartsBar',
  component: NbosHighchartsBar,
}

const Template = args => <NbosHighchartsBar {...args} />

export const Primary = Template.bind({})
Primary.args = {}
