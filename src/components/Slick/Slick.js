import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './Slick.module.css'
import Button from '../Button/Button'

export default function Slick() {
  const settings = {
    className: 'center',
    centerPadding: '60px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <div className={styles.custom}>
      <div>
        <Slider {...settings}>
          <div><Button title='Салаты'/></div>
          <div><Button title='Первые блюда'/></div>
          <div><Button title='Вторые блюда'/></div>
          <div><Button title='Горячие закуски'/></div>
          <div><Button title='Напитки'/></div>
        </Slider>
      </div>
    </div>
  )
}
