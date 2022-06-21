import { NbosPage } from './NbosPage'

export default {
  title: 'Molecules/NbosPage',
  component: NbosPage,
}

const Template = args => <NbosPage {...args} />

export const Elevation2 = Template.bind({})
Elevation2.args = { elevation: 2, data: 'hello' }

export const Elevation6 = Template.bind({})
Elevation6.args = { elevation: 6, data: 'goodbye' }

export const Elevation12Yellow = Template.bind({})
Elevation12Yellow.args = {
  elevation: 12,
  bgColor: '#ffff00',
  children: 'hello world',
}
