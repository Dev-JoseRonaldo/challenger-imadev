import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TestimonialItem } from '.'
import { testimonialItemsMock } from './mock'

export default {
  title: 'Components/TestimonialItem',
  component: TestimonialItem,
  parameters: {
    design: {
      type: 'figma',
      url: 'URL_FIGMA',
    },
  },
  args: {
    author: testimonialItemsMock[0].author,
    message: testimonialItemsMock[0].message,
  },
} as ComponentMeta<typeof TestimonialItem>

const Template: ComponentStory<typeof TestimonialItem> = (args) => (
  <TestimonialItem {...args} />
)

export const Default = Template.bind({})
