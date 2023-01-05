import { FreeMode, A11y, Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'

import { TestimonialItemProps } from '../TestimonialItem'
import { SliderItemTemplate } from './templates/SliderItemTemplate'

import { swiperOptions } from './config'
import { FaQuoteLeft } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/autoplay'

import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import {
  Carousel,
  CarouselContainer,
  CarouselItem,
  CarouselSlide,
  QuoteIconStyle,
} from './styles'

interface SliderProps {
  data: TestimonialItemProps[]
}

export const Slider = ({ data }: SliderProps) => {
  return (
    <div className={CarouselContainer}>
      <FaQuoteLeft className={QuoteIconStyle} fill="#074F97" />
      <div className={Carousel}>
        <div className={CarouselItem}>
          <Swiper
            className={CarouselSlide}
            spaceBetween={90}
            grabCursor
            autoplay
            navigation
            modules={[FreeMode, A11y, Navigation, Autoplay]}
            breakpoints={swiperOptions.breakpoints}
          >
            {data?.map(SliderItemTemplate)}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
