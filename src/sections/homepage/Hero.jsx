import React from "react";
import styled from "styled-components";

export const CarouselSlides1 = ({}) => {
  const Button2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <CarouselSlidesRoot>
      <SlideInfoAndIcons>
        <IconArrowLeft justifyContent={"flex-start"}>
          <ArrowLeft
            src={"https://file.rendit.io/n/sD3TIWlVJG77m10jKY8y.svg"}
          />
        </IconArrowLeft>
        <SlideLocations>
          <Paragraph>travel nursing & allied healthcare staffing</Paragraph>
          <Location1>Los Angeles</Location1>
          <Row2>
            <Profession justifyContent={"flex-end"}>
              Registured Nurse
            </Profession>
            <Col1>
              <Line src={"https://file.rendit.io/n/XPfYmpWBhiDc3Xxs12ox.svg"} />
            </Col1>
            <Profession justifyContent={"flex-start"}>Pediatrics</Profession>
          </Row2>
          <Row2>
            <Shift textAlign={"left"}>12 Hour Night Shift</Shift>
            <Col1>
              <Line1
                src={"https://file.rendit.io/n/DizFmRSGRwwu7eXsiB0o.svg"}
              />
            </Col1>
            <Shift textAlign={"center"}>Gross Weekly Pay: $2,807.00</Shift>
          </Row2>
        </SlideLocations>
        <IconArrowLeft justifyContent={"flex-end"}>
          <ArrowLeft
            src={"https://file.rendit.io/n/Ivoeu7h4l1FTnMZQZKgX.svg"}
          />
        </IconArrowLeft>
      </SlideInfoAndIcons>
      <IconScrollHint>
        <ReacticonsbsBsMouse
          src={"https://file.rendit.io/n/nfF6RHUrUT8UPV0maUxS.svg"}
        />
        <Image1 src={"https://file.rendit.io/n/37zrcx1KQdjt2QCfw4tg.svg"} />
      </IconScrollHint>
      <Col1>
        <DisciplineDropupList borderRadius={"20px 0px 0px 20px"} />
        <DisciplineDropupList borderRadius={"0px"} />
        <DisciplineDropupList borderRadius={"0px"} />
        <Button2 onClick={(e) => Button2Function(e, "Button2")}>Search</Button2>
      </Col1>
      <Button1 onClick={(e) => Button1Function(e, "Button1")}>
        More Info
      </Button1>
    </CarouselSlidesRoot>
  );
};
const CarouselSlidesRoot = styled.div`
  height: 982px;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-width: 1512px;
`;
const SlideInfoAndIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-width: 1512px;
`;
const SlideLocations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Paragraph = styled.div`
  text-align: center;
  display: flex;
  font-size: 30px;
  font-family: FagoCo Black;
  font-weight: 400;
  color: #4fc1b1;
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  min-width: 504px;
`;
const Location1 = styled.div`
  text-align: center;
  display: flex;
  font-size: 80px;
  font-family: Open Sans;
  font-weight: 700;
  color: #ffffff;
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 504px;
`;
const Line = styled.img`
  width: 2px;
  height: 26px;
`;
const Line1 = styled.img`
  width: 2px;
  height: 28.77px;
`;
const IconScrollHint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ReacticonsbsBsMouse = styled.img`
  width: 24px;
  height: 24px;
`;
const Image1 = styled.img`
  width: 31px;
  height: 24px;
`;
const Button2 = styled.button`
  text-align: center;
  display: flex;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 8px 20px 4px rgba(0, 0, 0, 0.25);
  height: 52px;
  background-color: #ffffff;
  overflow: hidden;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 20px 20px 0px;
  padding: 10px 25px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Button1 = styled.button`
  text-align: center;
  display: flex;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
  border-width: 2px;
  border-color: #ffffff;
  border-style: solid;
  box-shadow: 0px 2px 2px 0px rgba(38, 38, 38, 0.5);
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 20px 40px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;
const IconArrowLeft = styled.div`
  width: 504px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  flex-grow: 1;
  padding: 5px 20px;
  justify-content: ${(props) => props.justifyContent};
`;
const ArrowLeft = styled.img`
  width: 24px;
  height: 32px;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-width: 504px;
`;
const Profession = styled.div`
  text-align: center;
  display: flex;
  font-size: 30px;
  font-family: Open Sans;
  font-weight: 700;
  color: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Shift = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 700;
  color: #ffffff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: ${(props) => props.textAlign};
`;
const DisciplineDropupList = styled.div`
  border-width: 1px;
  border-color: #d2d2d2;
  border-style: solid;
  width: 278px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${(props) => props.borderRadius};
`;
