import { useAnimation, motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
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
  const control = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    }
  }, [control, isInView])

  return (
    <>
      <main className={MainContainer}>
        <section id="testimoials" className={TestimonialSectionStyle}>
          <h2 className={TestimonialTitleStyle}>{testimonialSection.title}</h2>
          <div className={TestimonialContentContainerStyle}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              className={TestimonialImageContainerStyle}
            >
              <Image
                src={testimonialSection.imgUrl}
                alt={testimonialSection.imgAlt}
                width={513}
                height={532}
                className={TestimonialImageStyle}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              <Slider data={testimonialSection.testimonials} />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
