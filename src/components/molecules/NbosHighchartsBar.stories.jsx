import { NbosHighchartsBar } from './NbosHighchartsBar'

export default {
  title: 'Molecules/NbosHighchartsBar',
  component: NbosHighchartsBar,
}

const Template = args => <NbosHighchartsBar {...args} />

export const Outcome = Template.bind({})
Outcome.args = { chartName: 'outcome' }

export const Behavior = Template.bind({})
Behavior.args = {}
