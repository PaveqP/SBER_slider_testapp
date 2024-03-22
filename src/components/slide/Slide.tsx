import React, { FC } from 'react'
import './Slide.scss'

interface SlideProps{
    id: number,
    title: string,
    backgroundColor: string,
    info: string
}

const Slide:FC<SlideProps> = ({id, title, backgroundColor, info}) => {
  return (
    <div style={{backgroundColor: backgroundColor}} className='slide'>
        <h2>{id}</h2>
        <h2>{title}</h2>
        <p>{info}</p>
    </div>
  )
}

export {Slide}