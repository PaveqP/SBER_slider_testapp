import { FC } from 'react'
import { ISlide } from '../types'
import img2 from '../../utils/images/2.png'
import img3 from '../../utils/images/3.png'
import img5 from '../../utils/images/5.png'
import img7 from '../../utils/images/7.png'
import './Slide.scss'

const Slide:FC<ISlide> = ({id, title, backgroundColor, color, info, image}) => {
  return (
    <div style={{backgroundColor: backgroundColor, color: color}} className='slide'>
      {image ?
        <div className="slide__row">
          <img className='slide__image' 
            src={id === 2 ? img2 : id === 3 ? img3 : id === 5 ? img5 : img7} alt="image" 
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