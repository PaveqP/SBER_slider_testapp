import React, { useState, useEffect } from 'react'
import { SlideList, Controllers } from '../../components'
import { ISlide } from '../../components/types'
import slides from '../../utils/slides/Slides.json'
import './Slider.scss'

function Slider() {

  const [offset, setOffset] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = useState<number>(1)
  const [data, setData] = useState<ISlide[]>()

  useEffect(() => {
    setData(slides)
  }, [])

  return (
    <section className='slider'>
        <SlideList offset={offset} currentSlide={currentSlide} data={data}/>
        <Controllers setOffset={setOffset} setCurrentSlide={setCurrentSlide} data={data} currentSlide={currentSlide}/>
    </section>
  )
}

export {Slider}