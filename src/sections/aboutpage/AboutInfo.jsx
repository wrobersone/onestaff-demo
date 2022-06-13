import React from "react";
import styled from "styled-components";
export const SectionAboutUs1 = ({}) => {
  return (
    <SectionAboutUsRoot>
      <Row>
        <Paragraph>
          OneStaff Medical proudly staffs some of the most talented Travel Nurse
          + Allied Healthcare professionals, into their own dream assignments,
          across the country. Consistently recognized by Inc. 5000, as one of
          the fastest growing privately-held companies in the U.S., we walk that
          line between the “flexible start up” mentality and still offering the
          great office environment perks of some larger corporate ‘best places
          to work.’ That private-ownership allows us the freedom to be nimble,
          in the best interest of our travelers and internal employees, while
          our size allows them the stability, facility partnerships and volume
          of assignments that the ‘big guys’ have. That same employee-centric
          approach, fuels the focus on our internal philosophy;{" "}
        </Paragraph>
      </Row>
      <Row1>
        <Text1>Be Bold.</Text1>
        <Hr src={"https://file.rendit.io/n/IiGcNDx9v2Mk0jzkiqbw.svg"} />
        <Text1>Travel. Work. Your Own Way.</Text1>
        <Hr src={"https://file.rendit.io/n/IiGcNDx9v2Mk0jzkiqbw.svg"} />
        <Text1>We. Are. OneStaff. </Text1>
      </Row1>
    </SectionAboutUsRoot>
  );
};
const SectionAboutUsRoot = styled.div`
  height: 324px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  min-width: 1002px;
  padding: 0px 255px 50px 255px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 962px;
  padding: 0px 20px;
`;
const Paragraph = styled.div`
  width: 1002px;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 37.56px;
  color: #262626;
  white-space: pre-wrap;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 1002px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 334px;
  font-size: 30px;
  font-family: FagoCo Black;
  font-weight: 400;
  line-height: 26px;
  color: #3f9d95;
  flex-grow: 1;
`;
const Hr = styled.img`
  width: 1px;
  height: 52px;
  flex-grow: 1;
`;
