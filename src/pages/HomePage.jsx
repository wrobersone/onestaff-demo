import React from 'react'
import {SectionAbout1} from  '../sections/homepage/AboutUs'
import {SectionBennies1} from '../sections/homepage/Benefits'
import { CarouselSlides1 } from '../sections/homepage/Hero'
import {SectionNewTraveler1} from '../sections/homepage/NewTraveler'
import { SectionReviews1 } from '../sections/homepage/Reviews'
import { Footer1 } from '../components/common/Foot'

const HomePage = () => {
  return (
    <div>
        <CarouselSlides1 />
        <SectionAbout1 />
        <SectionBennies1 />
        <SectionNewTraveler1 />
        <SectionReviews1 />
        <Footer1 />
    </div>
  )
}

export default HomePage