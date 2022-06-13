import React from "react";
import styled from "styled-components";
export const SectionBennies1 = ({}) => {
  return (
    <SectionBenniesRoot>
      <Text1>Benefits</Text1>
      <Row1>
        <CarouselBennies>
          <SlidesBox
            src={"https://file.rendit.io/n/xGktGKhGCq7eFXuwmIN2.png"}
          />
          <SlidesNavigation>
            <ClickArea>
              <ArrowLeft
                src={"https://file.rendit.io/n/zAIvLXNY0ai70FeF8n4z.svg"}
              />
            </ClickArea>
            <SlideIndicator>
              <DotIndictaor
                src={"https://file.rendit.io/n/EtBWWcDCLC6dE1jwM71P.svg"}
              />
              <DotIndictaor1
                src={"https://file.rendit.io/n/7QQaufaR3XQvesoj9YL0.svg"}
              />
              <DotIndictaor1
                src={"https://file.rendit.io/n/7QQaufaR3XQvesoj9YL0.svg"}
              />
              <DotIndictaor1
                src={"https://file.rendit.io/n/7QQaufaR3XQvesoj9YL0.svg"}
              />
              <DotIndictaor1
                src={"https://file.rendit.io/n/7QQaufaR3XQvesoj9YL0.svg"}
              />
            </SlideIndicator>
            <ClickArea>
              <ArrowLeft
                src={"https://file.rendit.io/n/bMdwjEk7ZbVSaaGj2SLY.svg"}
              />
            </ClickArea>
          </SlidesNavigation>
        </CarouselBennies>
      </Row1>
    </SectionBenniesRoot>
  );
};
const SectionBenniesRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  min-width: 1512px;
`;
const Text1 = styled.div`
  text-align: center;
  display: flex;
  font-size: 48px;
  font-family: Open Sans;
  color: #262626;
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  min-width: 1512px;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const CarouselBennies = styled.div`
  width: 1428px;
  height: 560px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 64px;
`;
const SlidesBox = styled.img`
  height: 413px;
  align-self: stretch;
  flex-grow: 1;
  min-width: 1300px;
`;
const SlidesNavigation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const SlideIndicator = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`;
const DotIndictaor = styled.img`
  width: 16px;
  height: 16px;
`;
const ClickArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
`;
const ArrowLeft = styled.img`
  width: 24px;
  height: 24px;
`;
const DotIndictaor1 = styled.img`
  width: 12px;
  height: 12px;
`;
