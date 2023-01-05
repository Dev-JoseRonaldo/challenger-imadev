import { ComponentMeta, ComponentStory } from '@storybook/react'

import { testimonialItemsMock } from '../TestimonialItem/mock'

import { Slider } from '.'

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    design: {
      type: 'figma',
      url: 'URL_FIGMA',
    },
  },
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  data: testimonialItemsMock,
}
