import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Example } from '.'

export default {
  title: 'Components/Example',
  component: Example,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof Example>

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Example',
}
