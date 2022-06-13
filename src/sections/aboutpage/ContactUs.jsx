import React from "react";
import styled from "styled-components";
export const SectionContact1 = ({}) => {
  return (
    <SectionContactRoot>
      <Row>
        <Text1>How to Get in Touch</Text1>
      </Row>
      <Row1>
        <Col>
          <Image1 src={"https://file.rendit.io/n/FAPyP8jYeNFQeAyvLfl1.svg"} />
          <Text2>Call us</Text2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua:
          </Paragraph>
          <Text3>(877) 783-1483</Text3>
        </Col>
        <Hr src={"https://file.rendit.io/n/2POAnPDf9Nvjpejt0NHM.svg"} />
        <Col1>
          <Image2 src={"https://file.rendit.io/n/TCw7htRFAvrACImZhDGD.svg"} />
          <Text2>Visit Us</Text2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua:
          </Paragraph>
          <Text3>Omaha, Nebraska</Text3>
          <Text3>Miamisburg, Ohio</Text3>
          <Text3>Clearwater, Florida</Text3>
        </Col1>
        <Hr src={"https://file.rendit.io/n/2POAnPDf9Nvjpejt0NHM.svg"} />
        <Col2>
          <ReacticonsmdMdEmail
            src={"https://file.rendit.io/n/bKz09daa3LEBWBHDPiOP.svg"}
          />
          <Text2>contact Us</Text2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua:
          </Paragraph>
          <Text3>info@onestaffmedical.com</Text3>
        </Col2>
      </Row1>
    </SectionContactRoot>
  );
};
const SectionContactRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  min-width: 600px;
  padding: 0px 201px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 600px;
  font-size: 48px;
  font-family: Open Sans;
  color: #262626;
  flex-grow: 1;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 1002px;
`;
const Col = styled.div`
  width: 334px;
  height: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  padding: 11px 0px;
`;
const Image1 = styled.img`
  width: 101.88px;
  height: 139px;
`;
const Col1 = styled.div`
  width: 334px;
  height: 382px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
`;
const Image2 = styled.img`
  width: 150px;
  height: 122.5px;
`;
const Col2 = styled.div`
  width: 334px;
  height: 370px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;
const ReacticonsmdMdEmail = styled.img`
  width: 142.5px;
  height: 119.67px;
`;
const Text2 = styled.div`
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: uppercase;
  color: #393939;
`;
const Paragraph = styled.div`
  text-align: center;
  width: 278px;
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 24px;
  color: #393939;
`;
const Text3 = styled.div`
  font-size: 14px;
  font-family: Open Sans;
  text-decoration: underline;
  font-weight: 400;
  color: #393939;
`;
const Hr = styled.img`
  width: 1px;
  height: 370px;
`;
