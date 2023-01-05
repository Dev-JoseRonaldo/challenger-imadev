import { render, screen } from '@testing-library/react'

const { getByText } = screen

import { TestimonialItem, TestimonialItemProps } from '.'

const data: TestimonialItemProps = {
  id: '0',
  author: 'BETH RAYLAND',
  message:
    'Lorem ipsum dolor sit amet consectetur. Enim ac id sapien volutpat.',
}

describe('<TestimonialItem />', () => {
  it('should render the TestimonialItem', () => {
    render(<TestimonialItem {...data} />)

    const author = getByText('BETH RAYLAND')
    const message = getByText(
      'Lorem ipsum dolor sit amet consectetur. Enim ac id sapien volutpat.',
    )

    expect(author).toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<TestimonialItem {...data} />)
    expect(container).toMatchSnapshot()
  })
})
