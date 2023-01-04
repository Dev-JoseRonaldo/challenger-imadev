import { render, screen } from '@testing-library/react'

import { Example } from '.'

const { getByRole } = screen

describe('<Example />', () => {
  it('should render the heading', () => {
    render(<Example title="Hello World" />)

    const heading = getByRole('heading', { name: 'Hello World' })

    expect(heading).toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(<Example title="Hello World" />)

    expect(container).toMatchSnapshot()
  })
})
