'use client'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'

export const Carrusel = () => {
  return (
    <Swiper
      spaceBetween={'-44%'}
      autoHeight={true}
      slidesPerView={'auto'}
      centeredSlides={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1000: {
          slidesPerView: 1,
          spaceBetween: '-68%',
        },
      }}
      modules={[Autoplay]}
      className="mySwiper h-auto w-auto"
    >
      <SwiperSlide className="flex items-center justify-center object-cover ">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/figma.webp"
          alt="figma"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/nextjs.webp"
          alt="nextjs"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/react.webp"
          alt="react"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/tailwindcss.webp"
          alt="tailwindcss"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/vite.webp"
          alt="vite"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/npm.webp"
          alt="npm"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/html.webp"
          alt="html"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/css.webp"
          alt="css"
          width={270}
          height={305}
        />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center object-cover">
        <Image
          className=" h-auto w-auto"
          src="/assets/images/framework/js.webp"
          alt="js"
          width={270}
          height={305}
        />
      </SwiperSlide>
    </Swiper>
  )
}
