import React from "react";
import styled from "styled-components";
export const SectionAwards1 = ({}) => {
  return (
    <SectionAwardsRoot>
      <Row>
        <Text1>Awards</Text1>
      </Row>
      <Row1>
        <Col justifyContent={"flex-start"}>
          <IncHonorRoll
            src={"https://file.rendit.io/n/Pej3KBVPifIFFik3poXR.png"}
          />
        </Col>
        <Col justifyContent={"center"}>
          <SIABestStaffingFirms
            src={"https://file.rendit.io/n/NEwWGci2wuiangABdx6u.png"}
          />
        </Col>
        <Col justifyContent={"flex-end"}>
          <Image1 src={"https://file.rendit.io/n/L354HoSyA7EeBVq8zfv1.png"} />
        </Col>
      </Row1>
    </SectionAwardsRoot>
  );
};
const SectionAwardsRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  min-width: 1002px;
  padding: 50px 255px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 1002px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 1002px;
  font-size: 48px;
  font-family: Open Sans;
  color: #262626;
  flex-grow: 1;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  min-width: 1002px;
`;
const IncHonorRoll = styled.img`
  width: 171px;
  height: 125px;
`;
const SIABestStaffingFirms = styled.img`
  width: 508px;
  height: 125px;
`;
const Image1 = styled.img`
  width: 125px;
  height: 125px;
`;
const Col = styled.div`
  width: 334px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;
