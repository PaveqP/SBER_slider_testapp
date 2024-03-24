import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { ISlide  } from '../types'
import { Play, Pause, LeftArrow, RightArrow } from '../../utils'
import './Controllers.scss'

interface ControllersProps{
    setOffset: ((updateOffset: (currentOffset: number) => number) => void),
    setCurrentSlide: (updateSlide: (currentSlide: number) => number) => void,
    data: ISlide[] | undefined,
    currentSlide: number,
}
const Controllers:FC<ControllersProps> = ({setOffset, setCurrentSlide, data, currentSlide}) => {

    const timer = useRef<NodeJS.Timeout | null>(null)
    const [nextActive, setNextActive] = useState<boolean>(true)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const min: number = 1
    const max = data?.length

    const handleNextSlide = useCallback((auto: boolean) => {
        setNextActive(false)
        setCurrentSlide((currentSlide) => {
            if (max && ((currentSlide + 1) > max)){
                setOffset((currentOffset: number) => currentOffset - currentOffset)
                setTimeout(() => setNextActive(true), 800)
                return 1
            } 
            if (!auto) handleStop()
            setOffset((currentOffset: number) => currentOffset - 1000)
            setTimeout(() => setNextActive(true), 800)
            return currentSlide + 1
        })
    }, [setCurrentSlide, setOffset, max, setNextActive])

    const handlePrevSlide = useCallback(() => {
        if (currentSlide === 1) return
        setNextActive(false)
        handleStop()
        if ((currentSlide - 1) < min) return
        setOffset((currentOffset: number) => currentOffset + 1000)
        setCurrentSlide((current) => current - 1)
        setTimeout(() => setNextActive(true), 800)
    }, [setCurrentSlide, setOffset, currentSlide])

    const handlePlay = useCallback(() => {
        if (!timer.current){
            setIsPlaying(true)
            timer.current = setInterval(() => {
                handleNextSlide(true)
            }, 3000)
        }
    }, [handleNextSlide])

    const handleStop = useCallback(() => {
        setIsPlaying(false)
        clearInterval(timer.current!)
        timer.current = null
    }, [])

    useEffect(() => {
        return () => {
            clearInterval(timer.current!)
        }
    }, [])

    console.log(!!timer.current)

  return (
    <div className="controllers">
        <button className='controllers__button prevButton' onClick={() => nextActive && handlePrevSlide()}><LeftArrow/></button>
        <button className='controllers__button playButton' style={isPlaying ? {
            boxShadow: "0px 0px 2px blue"
        } : {}
        } onClick={handlePlay}><Play/></button>
        <button className='controllers__button pauseButton' onClick={handleStop}><Pause/></button>
        <button className='controllers__button nextButton' onClick={() => nextActive && handleNextSlide(false)}><RightArrow/></button>
    </div>
  )
}

export {Controllers}