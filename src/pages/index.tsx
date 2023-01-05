import { GetStaticProps } from 'next'

import { testimonialItemsMock } from '../components/TestimonialItem/mock'
import { MainLayout, MainLayoutProps } from '../layout/Main'

export default function Main(props: MainLayoutProps) {
  return <MainLayout {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      testimonialSection: {
        title: 'Testimonals',
        imgUrl:
          'https://res.cloudinary.com/devjoseronaldo/image/upload/v1672860160/img_k0xf5v.png',
        imgAlt: 'Texto Alternativo',
        testimonials: testimonialItemsMock,
      },
      revalidate: 60 * 60 * 24, // 86400 seconds = 24 hours
    },
  }
}
