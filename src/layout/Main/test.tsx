import { render, screen } from '@testing-library/react'

import { MainLayout, MainLayoutProps } from '.'

import { testimonialItemsMock } from '../../components/TestimonialItem/mock'

const { getByRole, getByTestId } = screen

const data: MainLayoutProps = {
  testimonialSection: {
    title: 'Testimonals',
    imgUrl:
      'https://res.cloudinary.com/devjoseronaldo/image/upload/v1672860160/img_k0xf5v.png',
    imgAlt: 'Texto Alternativo',
    testimonials: testimonialItemsMock,
  },
}

jest.mock('components/Slider', () => ({
  __esModule: true,
  Slider: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Slider">{children}</div>
  },
}))

describe('<Main />', () => {
  it('should render main page', () => {
    render(<MainLayout {...data} />)

    const slider = getByTestId('Mock Slider')
    const testimonialSectionTitle = getByRole('heading', {
      name: 'Testimonals',
    })
    const testimonialSectionImage = getByRole('img', {
      name: 'Texto Alternativo',
    })

    expect(slider).toBeInTheDocument()
    expect(testimonialSectionTitle).toBeInTheDocument()
    expect(testimonialSectionImage).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdevjoseronaldo%2Fimage%2Fupload%2Fv1672860160%2Fimg_k0xf5v.png&w=1080&q=75',
    )
    expect(testimonialSectionImage).toHaveAttribute('alt', 'Texto Alternativo')
  })
})
