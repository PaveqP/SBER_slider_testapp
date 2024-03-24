import React, { FC } from 'react'
import './Slide.scss'

interface SlideProps{
    id: number,
    title: string,
    backgroundColor: string,
    color: string,
    info: string,
    image: string
}

const Slide:FC<SlideProps> = ({title, backgroundColor, color, info, image}) => {
  return (
    <div style={{backgroundColor: backgroundColor, color: color}} className='slide'>
      {image ?
        <div className="slide__row">
          <img className='slide__image' 
            src={require(image)} alt="image" 
            style={{boxShadow: `0px 0px 20px ${color}`}} 
          />
          <div className="slide__textContent" style={{maxWidth: "500px"}}>
            <h2 className='slide__title'>{title}</h2>
            <p className='slide__info'>{info}</p>
          </div>
        </div>
        :
        <>
          <h2 className='slide__title'>{title}</h2>
          <p className='slide__info'>{info}</p>
        </>
      }
    </div>
  )
}

export {Slide}