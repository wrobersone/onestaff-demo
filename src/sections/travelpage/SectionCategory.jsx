import React from 'react'
import styled from 'styled-components'
import Title from '../../utils/Title'
import CategoryBtn from '../../utils/CategoryBtn'
import { InnerLayout } from '../../utils/Layouts'

const SectionStyle = styled.section`
    .category-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.2rem;
        padding-top: 3rem;
        @media screen and (max-width: 820px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

function SectionCategory() {
  return (
    <SectionStyle>
        <InnerLayout>
            <div className="title-container">
                <Title name={'All Categories'} para={'Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!'} />
            </div>
            <div className="category-container">
                <CategoryBtn name={'Medical Assistants {600}'} />
                <CategoryBtn name={'Licensed Practical Nursing {600}'} />
                <CategoryBtn name={'Certified Nurse Assistants {600}'} />
                <CategoryBtn name={'Registered Nursing {600}'} />
                <CategoryBtn name={'Rehab Therapists {600}'} />
                <CategoryBtn name={'Surgical Technicians {600}'} />
                <CategoryBtn name={'Registered Nursing {600}'} />
                <CategoryBtn name={'Registered Nursing {600}'} />
                <CategoryBtn name={'Registered Nursing {600}'} />
                <CategoryBtn name={'Registered Nursing {600}'} />
                <CategoryBtn name={'Registered Nursing {600}'} />
                <CategoryBtn name={'Registered Nursing {600}'} />
            </div>
        </InnerLayout>
    </SectionStyle>
  )
}

export default SectionCategory