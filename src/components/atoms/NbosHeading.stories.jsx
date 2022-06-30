import { NbosHeading } from './NbosHeading'

export default {
  title: 'Atoms/NbosHeading',
  component: 'NbosHeading',
}

const Template = args => <NbosHeading {...args} />

export const H1 = Template.bind({})
H1.args = { variant: 'h1', children: 'Steve Pietrek' }

export const H2 = Template.bind({})
H2.args = { variant: 'h2', children: 'Steve Pietrek' }

export const H3 = Template.bind({})
H3.args = { variant: 'h3', children: 'Steve Pietrek' }

export const H4 = Template.bind({})
H4.args = { variant: 'h4', children: 'Steve Pietrek' }

export const H5 = Template.bind({})
H5.args = { variant: 'h5', children: 'Steve Pietrek' }

export const H6 = Template.bind({})
H6.args = { variant: 'h6', children: 'Steve Pietrek' }
