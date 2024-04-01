"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import CameraIcon from '@/components/icons/CameraIcon'
import HeartIcon from '@/components/icons/HeartIcon'

const EmblaCarousel = ({imagesData}: any) => {
  const options: EmblaOptionsType = {}
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [currentIndex, setCurrentIndex] = useState(0);

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    if (emblaApi) {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    }
  }, [])

  useEffect(() => {
    emblaApi && emblaApi.on('slidesInView', logSlidesInView)
  }, [emblaApi, logSlidesInView]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  

  return (
    <section className="embla relative">
      <div className='absolute right-4 top-4 bg-white rounded-full h-10 w-10 z-10'>
        <button className='rounded font-bold leading-5 text-center bg-transparent flex justify-center items-center w-full h-full'>
          <HeartIcon />
        </button>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imagesData?.map(({ url }: any, index: number) => (
            <div key={index} className='relative w-auto h-[269px] embla__slide bg-[#EBECEF]'>
              <Image
                src={url} 
                alt={'cars'}
                fill
                className='object-contain my-0 mx-auto text-transparent'
              />
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <div className='rounded-2xl bg-[#020309] absolute bottom-4 right-4 z-10 p-2 flex items-center gap-2'>
        <CameraIcon />
        <p className='text-xs leading-[14px] text-white'>{currentIndex + 1} / {imagesData?.length}</p>
      </div>
    </section>
  )
}

export default EmblaCarousel

