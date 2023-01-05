import Image from 'next/image'
import { Slider } from '../../components/Slider'
import { TestimonialItemProps } from '../../components/TestimonialItem'

import {
  MainContainer,
  TestimonialContentContainerStyle,
  TestimonialImageContainerStyle,
  TestimonialImageStyle,
  TestimonialSectionStyle,
  TestimonialTitleStyle,
} from './styles'

export interface testimonialSectionProps {
  title: string
  imgUrl: string
  imgAlt: string
  testimonials: TestimonialItemProps[]
}

export interface MainLayoutProps {
  testimonialSection: testimonialSectionProps
}

export const MainLayout = ({ testimonialSection }: MainLayoutProps) => {
  return (
    <>
      <main className={MainContainer}>
        <section id="testimoials" className={TestimonialSectionStyle}>
          <h2 className={TestimonialTitleStyle}>{testimonialSection.title}</h2>
          <div className={TestimonialContentContainerStyle}>
            <div className={TestimonialImageContainerStyle}>
              <Image
                src={testimonialSection.imgUrl}
                alt={testimonialSection.imgAlt}
                width={513}
                height={532}
                className={TestimonialImageStyle}
              />
            </div>
            <Slider data={testimonialSection.testimonials} />
          </div>
        </section>
      </main>
    </>
  )
}
