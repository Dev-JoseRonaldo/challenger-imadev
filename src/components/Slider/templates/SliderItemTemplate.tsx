import { SwiperSlide } from 'swiper/react'

import { TestimonialItem, TestimonialItemProps } from '../../TestimonialItem'

import { CarouselTemplateStyle } from '../styles'

export const SliderItemTemplate = (SliderItem: TestimonialItemProps) => {
  const { id, author, message } = SliderItem
  return (
    <SwiperSlide className={CarouselTemplateStyle} key={id}>
      <TestimonialItem author={author} message={message} />
    </SwiperSlide>
  )
}
