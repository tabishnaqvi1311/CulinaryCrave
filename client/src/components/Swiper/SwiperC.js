import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './SwiperC.module.css'
import { useRef, useState } from "react";
import { Navigation } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'

const SwiperC = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className={styles.mySwiper}>
        <SwiperSlide className={styles.slide1}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide2}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide3}>Slide 3</SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperC