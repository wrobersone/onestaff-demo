import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../utils/Layouts'
import JobCard from '../../utils/JobCard'
import Title from '../../utils/Title'

import logo1 from '../../components/images/logo/img-1.svg'
import logo2 from '../../components/images/logo/img-2.svg'
import logo3 from '../../components/images/logo/img-3.svg'
import logo4 from '../../components/images/logo/img-4.svg'
import logo5 from '../../components/images/logo/img-5.svg'
import logo6 from '../../components/images/logo/img-6.svg'
import logo7 from '../../components/images/logo/img-7.svg'

const SectionJobsStyle = styled.section`
    background-color: #1b748b;
    .cards-container {
        padding-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        grid-gap: 2rem;
    }
`;

function SectionJobs() {
  return (
    <SectionJobsStyle>
      <InnerLayout>
      <div className="title-container">
          <Title name={'Recent Jobs'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!'} />
      </div>
      <div className="cards-container">
      <JobCard 
          logo={logo2} 
          bg={'#f1dbb4'}  
          name={'Gowind Pro Inc.'} 
          loc={'London, UK'} 
          tit={'Game Developer'} 
          type={'Remote'} 
          stack={'ASP.Net, Node.js, TypeScript, Unity, Unreal Engine'}
          salary={'$79,000 - $150,000'}
      />
      <JobCard 
          logo={logo3}
          bg={'#f1dbb4'} 
          name={'Code Axis'} 
          loc={'California, USA'} 
          tit={'Web Developer'} 
          type={'Full Time'} 
          stack={'React, Node, Express, MongoDB, JavaScript, TypeScript'}
          salary={'$50,000 - $95,000'}
      />
      <JobCard 
          logo={logo4}
          bg={'#f1dbb4'}  
          name={'Adobe'} 
          loc={'Cape Town, SA'} 
          tit={'Data Scientist'} 
          type={'Remote'} 
          stack={'C++, Machine Learning, Python, CSV, MySQL, PostgreSQL'}
          salary={'$70,000 - $90,000'}
      />
      <JobCard 
          logo={logo5}
          bg={'#f1dbb4'}
          name={'Google'} 
          loc={'Reading, UK'} 
          tit={'Software Developer'} 
          type={'Part Time'} 
          stack={'ASP.Net, Node.js, TypeScript, VUE.js, C#, Python'}
          salary={'$79,000 - $150,000'}
      />
      <JobCard 
          logo={logo1}
          bg={'#f1dbb4'}
          name={'Google'} 
          loc={'Reading, UK'} 
          tit={'Software Developer'} 
          type={'Part Time'} 
          stack={'ASP.Net, Node.js, TypeScript, VUE.js, C#, Python'}
          salary={'$79,000 - $150,000'}
      />
      <JobCard 
          logo={logo6}
          bg={'#f1dbb4'}
          name={'Github'} 
          loc={'California, USA'} 
          tit={'Web Developer'} 
          type={'Full Time'} 
          stack={'React, Node, Express, MongoDB, JavaScript, TypeScript'}
          salary={'$50,000 - $95,000'}
      />
      <JobCard 
          logo={logo7}
          bg={'#f1dbb4'} 
          name={'Behance'} 
          loc={'Cape Town, SA'} 
          tit={'Software Engineer'} 
          type={'Full Time'} 
          stack={'C++, Python, CSV, MySQL, PostgreSQL, Web GL'}
          salary={'$70,000 - $90,000'}
      />
      <JobCard 
          logo={logo2}
          bg={'#f1dbb4'}  
          name={'Maches'} 
          loc={'London, UK'} 
          tit={'Web Developer'} 
          type={'Remote'} 
          stack={'ASP.Net, Node.js, TypeScript, C#, Python'}
          salary={'$79,000 - $150,000'}
      />
      <JobCard 
          logo={logo1}
          bg={'#f1dbb4'} 
          name={'Alpha India'} 
          loc={'California, USA'} 
          tit={'Web Developer'} 
          type={'Part Time'} 
          stack={'React, Node, Express, MongoDB, JavaScript, TypeScript'}
          salary={'$50,000 - $95,000'}
      />
      </div>
      </InnerLayout>
    </SectionJobsStyle>
  )
}

export default SectionJobs