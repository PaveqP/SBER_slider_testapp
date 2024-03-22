import React, { FC, useCallback, useRef } from 'react'
import { ISlide  } from '../types'
import leftArrow from '../../utils/images/left-arrow.png'
import play from '../../utils/images/play.png'
import pause from '../../utils/images/pause.png'
import rightArrow from '../../utils/images/arrow-right.png'
import './Controllers.scss'

interface ControllersProps{
    setOffset: ((updateOffset: (currentOffset: number) => number) => void),
    setCurrentSlide: (updateSlide: (currentSlide: number) => number) => void,
    data: ISlide[] | undefined,
    currentSlide: number,
}
const Controllers:FC<ControllersProps> = ({setOffset, setCurrentSlide, data, currentSlide}) => {

    const timer = useRef<NodeJS.Timeout | null>(null)

    const min: number = 1
    const max = data?.length

    const handleNextSlide = useCallback((auto: boolean) => {
        setCurrentSlide((currentSlide) => {
            if (max && ((currentSlide + 1) > max)){
                setOffset((currentOffset: number) => currentOffset - currentOffset)
                return 1
            } 
            if (!auto) clearInterval(timer.current!)
            setOffset((currentOffset: number) => currentOffset - 1000)
            return currentSlide + 1
        })
    }, [setCurrentSlide, setOffset, max])

    const handlePrevSlide = useCallback(() => {
        clearInterval(timer.current!)
        if ((currentSlide - 1) < min) return
        setOffset((currentOffset: number) => currentOffset + 1000)
        setCurrentSlide((current) => current - 1)
    }, [setCurrentSlide, setOffset, currentSlide])

    const handlePlay = useCallback(() => {
        timer.current = setInterval(() => {
            handleNextSlide(true)
        }, 4000)
    }, [handleNextSlide])

    const handleStop = useCallback(() => {
        clearInterval(timer.current!)
    }, [])


  return (
    <div className="controllers">
        <button onClick={handlePrevSlide}><img src={leftArrow} alt="prev" /></button>
        <button onClick={handlePlay}><img src={play} alt="play" /></button>
        <button onClick={handleStop}><img src={pause} alt="pause" /></button>
        <button onClick={() => handleNextSlide(false)}><img src={rightArrow} alt="next" /></button>
    </div>
  )
}

export {Controllers}