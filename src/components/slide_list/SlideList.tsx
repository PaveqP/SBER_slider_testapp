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
                {data?.map((slide: ISlide) => (
                    <Slide 
                        key={slide.id} 
                        id={slide.id} 
                        title={slide.title} 
                        backgroundColor={slide.backgroundColor} 
                        color={slide.color}
                        info={slide.info}
                        image={slide.image}
                    />
                ))
                }
            </div>
        </div>
        <div className="slideList__counter">
            <p className='counter-num'>{currentSlide}</p> 
            <p className='counter-sep'>/</p>
            <p className='counter-total'>{data?.length}</p>
        </div>
    </section>
  )
}

export {SlideList}