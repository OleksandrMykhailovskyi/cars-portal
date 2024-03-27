"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { mockCarouselData } from '../../../../mock'
import Image from 'next/image'

const EmblaCarousel = () => {
  const options: EmblaOptionsType = {}
  // const SLIDE_COUNT = 10
  // const slides = Array.from(Array(SLIDE_COUNT).keys())
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {mockCarouselData.map(({source, alt}, index) => (
            // <div className="embla__slide px" key={index}>
            //   <div className="embla__slide__number">{index + 1}</div>
            // </div>
            <div key={index} className='relative w-full h-[269px] mx-4 embla__slide bg-[#EBECEF]'>
              <Image
                src={source} 
                alt={alt}
                fill
                priority
                className='w-full object-contain my-0 mx-auto text-transparent'
              />
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  )
}

export default EmblaCarousel

