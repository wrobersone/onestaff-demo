import React from 'react'
import { SectionHero1 } from '../sections/aboutpage/Hero'
import { SectionAboutUs1 } from '../sections/aboutpage/AboutInfo'
import { SectionContact1 } from '../sections/aboutpage/ContactUs'
import { SectionAwards1 } from '../sections/aboutpage/Awards'
import { SectionCareers1 } from '../sections/aboutpage/Careers'

const AboutPage = () => {
  return (
    <div>
        <SectionHero1 />
        <SectionAboutUs1 />
        <SectionContact1 />
        <SectionAwards1 />
        <SectionCareers1 />
    </div>
  )
}

export default AboutPage