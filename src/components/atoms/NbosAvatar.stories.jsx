import { NbosAvatar } from './NbosAvatar'

export default {
  title: 'Atoms/NbosAvatar',
  component: NbosAvatar,
}

const Template = args => <NbosAvatar {...args} />

export const Small = Template.bind({})
Small.args = { width: 30, height: 30 }

export const Medium = Template.bind({})
Medium.args = { width: 50, height: 50 }

export const Large = Template.bind({})
Large.args = { width: 80, height: 80 }

export const Remy = Template.bind({})
Remy.args = {
  alt: 'Remy Sharp',
  src: '/static/images/avatar/1.jpg',
}
