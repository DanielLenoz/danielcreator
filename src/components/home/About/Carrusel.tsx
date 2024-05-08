'use client'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'

export const Carrusel = () => {
  const images = [
    {
      image: '/assets/images/framework/figma.webp',
      alt: 'figma',
    },
    {
      image: '/assets/images/framework/nextjs.webp',
      alt: 'nextjs',
    },
    {
      image: '/assets/images/framework/react.webp',
      alt: 'react',
    },
    {
      image: '/assets/images/framework/tailwindcss.webp',
      alt: 'tailwindcss',
    },
    {
      image: '/assets/images/framework/vite.webp',
      alt: 'vite',
    },
    {
      image: '/assets/images/framework/npm.webp',
      alt: 'npm',
    },
    {
      image: '/assets/images/framework/html.webp',
      alt: 'html',
    },
    {
      image: '/assets/images/framework/css.webp',
      alt: 'css',
    },
    {
      image: '/assets/images/framework/js.webp',
      alt: 'js',
    },
  ]
  return (
    <Swiper
      spaceBetween={'-65%'}
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
          spaceBetween: '-77%',
        },
      }}
      modules={[Autoplay]}
      className="mySwiper h-full w-auto"
    >
      {images.map(({ image, alt }) => (
        <SwiperSlide className="flex max-h-[303px] items-center justify-center object-cover">
          <Image
            className=" h-full max-h-[303px] w-auto"
            key={alt}
            src={image}
            alt={alt}
            width={250}
            height={300}
            quality={100}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
