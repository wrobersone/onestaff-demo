import React from "react";
import styled from "styled-components";
export const SectionAbout1 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <SectionAboutRoot>
      <Col>
        <Vwvanbeach src={"https://file.rendit.io/n/Qwm8WU0gHpIy6Pibv6xb.png"} />
      </Col>
      <Col1>
        <Text1>We. Are. OneStaff.</Text1>
        <Row1>
          <Paragraph>
            OneStaff Medical proudly staffs some of the most talented Travel
            Nurse + Allied Healthcare professionals, into their own dream
            assignments, across the country. Consistently recognized by Inc.
            5000, as one of the fastest growing privately-held companies in the
            U.S., we walk that line between the “flexible start up” mentality
            and still offering the great office environment perks of some larger
            corporate ‘best places to work.’
          </Paragraph>
        </Row1>
        <Row2>
          <Button1 onClick={(e) => Button1Function(e, "Button1")}>
            Learn more
          </Button1>
        </Row2>
      </Col1>
    </SectionAboutRoot>
  );
};
const SectionAboutRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  min-width: 1002px;
  padding: 0px 255px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  border-radius: 20px;
`;
const Vwvanbeach = styled.img`
  width: 490px;
  height: 685px;
`;
const Col1 = styled.div`
  height: 462px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
`;
const Text1 = styled.div`
  display: flex;
  font-size: 100px;
  font-family: FagoCo Black;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 95px;
  text-transform: capitalize;
  color: #262626;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px 0px;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;
  min-width: 491px;
`;
const Paragraph = styled.div`
  width: 491px;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 37.56px;
  color: #262626;
  flex-grow: 1;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-width: 491px;
`;
const Button1 = styled.button`
  text-align: center;
  display: flex;
  font-size: 17px;
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 1.25px;
  line-height: 16px;
  text-transform: uppercase;
  color: #393939;
  box-shadow: 0px 8px 20px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  padding: 25px 55px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
