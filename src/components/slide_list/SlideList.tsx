import React, { FC } from 'react'
import { Slide } from '../slide/Slide'
import { ISlide } from '../types'
import './SlideList.scss'

interface SlideListProps{
    offset: number,
    currentSlide: number,
    data: ISlide[] | undefined
}

const SlideList:FC<SlideListProps> = ({offset, currentSlide, data}) => {

  return (
    <section className="slideList">
        <div className="slideList__window">
            <div className="slideList__slides" style={{transform: `translateX(${offset}px)`}}>
                {data?.map((slide: {id: number, title: string, backgroundColor: string, info: string}) => (
                    <Slide key={slide.id} id={slide.id} title={slide.title} backgroundColor={slide.backgroundColor} info={slide.info}/>
                ))
                }
            </div>
        </div>
        <div className="slideList__counter">
            {currentSlide} / {data?.length}
        </div>
    </section>
  )
}

export {SlideList}