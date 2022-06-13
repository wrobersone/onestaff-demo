import React from "react";
import styled from "styled-components";
export const Footer1 = ({}) => {
  return (
    <FooterRoot>
      <Columns>
        <Col>
          <Image1 src={"https://file.rendit.io/n/swUB56tP5dJ86YrOkf4U.png"} />
        </Col>
        <Col1 width={"auto"}>
          <Text1>Site Navigation</Text1>
          <NavigationFooter>
            {[
              {
                childText: "Home",
                minWidth: "363",
              },
              {
                childText: "Travel Jobs",
                minWidth: "363",
              },
              {
                childText: "Benefits",
                minWidth: "363",
              },
              {
                childText: "About",
                minWidth: "363",
              },
              {
                childText: "Blog",
                minWidth: "363",
              },
              {
                childText: "Carrers",
                minWidth: "363",
              },
              {
                childText: "New Travel nurse",
                minWidth: "363",
              },
              {
                childText: "Refer a Friend",
                minWidth: "363",
              },
            ].map((data) => (
              <Text2 minWidth={data.minWidth}>{data.childText}</Text2>
            ))}
          </NavigationFooter>
        </Col1>
        <Col1 width={"auto"}>
          <Text10>Contact Info</Text10>
          <Row>
            <Ellipse padding={"6px 6.35px 6.69px 6.34px"}>
              <ReacticonsfaFaPhone
                src={"https://file.rendit.io/n/hy2H4fSEBi5phTLeVRQ5.svg"}
              />
            </Ellipse>
            <Text11>(877) 783-1483</Text11>
          </Row>
          <Row>
            <Ellipse padding={"5px 5.43px 5.88px 5.44px"}>
              <ReacticonsmdMdEmail
                src={"https://file.rendit.io/n/PQ8RuJzLfeL0pPvCkZmu.svg"}
              />
            </Ellipse>
            <Text11>info@onestaffmedical.com</Text11>
          </Row>
          <Row2>
            <Ellipse padding={"5px 4.53px 4.06px 4.53px"}>
              <Image2
                src={"https://file.rendit.io/n/hW0zZz8PNn1mN8ui4p35.svg"}
              />
            </Ellipse>
            <Col1 width={"auto"}>
              <AddressNebraska gap={"2px"}>
                <Text13>Omaha, Nebraska</Text13>
                <Text2 minWidth={"324"}>10802 Farnam Dr.</Text2>
                <Text2 minWidth={"324"}>Omaha, NE 68154</Text2>
              </AddressNebraska>
              <AddressNebraska gap={"4px"}>
                <Text13>Miamisburg, Ohio</Text13>
                <Text2 minWidth={"324"}>3030 S Tech Blvd</Text2>
                <Text2 minWidth={"324"}>Miamisburg, OH 45342</Text2>
              </AddressNebraska>
              <AddressNebraska gap={"2px"}>
                <Text13>Clearwater, Florida</Text13>
                <Text2 minWidth={"324"}>18167 US Highway 19N, Suite 405</Text2>
                <Text2 minWidth={"324"}>Clearwater, FL 33764</Text2>
              </AddressNebraska>
            </Col1>
          </Row2>
        </Col1>
        <Col1 width={"363px"}>
          <Text1>Social Media</Text1>
          <IconsSocial>
            <Image3 src={"https://file.rendit.io/n/oT8rSF88ZhapngkoOkxw.svg"} />
            <Image4 src={"https://file.rendit.io/n/X9pjDqS5Jn11T8KbjQZF.svg"} />
            <Image5 src={"https://file.rendit.io/n/G6oncQn48DC7hTtoddL8.svg"} />
            <Ellipse3>
              <ReacticonsfaFaTiktok
                src={"https://file.rendit.io/n/mRJ9eQ7uOcMQ79beTStb.svg"}
              />
            </Ellipse3>
            <Ellipse4>
              <Image6
                src={"https://file.rendit.io/n/L2e4GvmzGNI3OvUi5CTa.svg"}
              />
            </Ellipse4>
          </IconsSocial>
          <Text1>Seals of Approval</Text1>
          <IconsSeals>
            <Pngegg src={"https://file.rendit.io/n/0S4HrHAucjgHCQXoneBe.png"} />
            <Pngegg src={"https://file.rendit.io/n/j90iIvLW8tVHWoGq7mYw.png"} />
          </IconsSeals>
        </Col1>
      </Columns>
      <Paragraph>
        Site Hosted By: OneStaffMedical.com ® © Copyright by: OneStaff Medical
        2022 PRIVACY STATEMENT | TERMS OF USE . All Rights Reserved.
      </Paragraph>
    </FooterRoot>
  );
};
const FooterRoot = styled.div`
  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.25);
  background-color: #3e3f43;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  min-width: 1512px;
  padding: 20px 0px;
`;
const Columns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 1512px;
`;
const Col = styled.div`
  width: 363px;
  height: 441px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
`;
const Image1 = styled.img`
  width: 387px;
  height: 245px;
`;
const NavigationFooter = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 363px;
`;
const Text10 = styled.div`
  font-size: 25px;
  font-family: Open Sans;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 43.38px;
  color: #ffffff;
  align-self: stretch;
  min-width: 363px;
`;
const ReacticonsfaFaPhone = styled.img`
  width: 16.31px;
  height: 16.31px;
`;
const ReacticonsmdMdEmail = styled.img`
  width: 18.13px;
  height: 18.13px;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 363px;
`;
const Image2 = styled.img`
  width: 19.94px;
  height: 19.94px;
`;
const IconsSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
`;
const Image3 = styled.img`
  width: 42px;
  height: 42px;
`;
const Image4 = styled.img`
  width: 33px;
  height: 32px;
`;
const Image5 = styled.img`
  width: 38px;
  height: 37.5px;
`;
const Ellipse3 = styled.div`
  height: 32px;
  background-image: url("https://file.rendit.io/n/b9Akbu18kMSFMYngg3ed.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 6.19px 0px 6.2px;
`;
const ReacticonsfaFaTiktok = styled.img`
  width: 19.61px;
  height: 19.61px;
`;
const Ellipse4 = styled.div`
  height: 28px;
  background-image: url("https://file.rendit.io/n/b9Akbu18kMSFMYngg3ed.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 2px 4px;
`;
const Image6 = styled.img`
  width: 24px;
  height: 24px;
`;
const IconsSeals = styled.div`
  display: flex;
  flex-direction: row;
  gap: 31px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Paragraph = styled.div`
  text-align: center;
  display: flex;
  font-size: 10px;
  font-family: Open Sans;
  font-weight: 600;
  letter-spacing: -0.15px;
  line-height: 20px;
  color: #98bcbc;
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 1512px;
  padding: 10px 0px;
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  width: ${(props) => props.width};
`;
const Text1 = styled.div`
  font-size: 25px;
  font-family: Open Sans;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 43.38px;
  color: #ffffff;
`;
const Text2 = styled.div`
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
  align-self: stretch;
  min-width: ${(props) => props.minWidth};
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 363px;
  padding: 8px 0px;
`;
const Ellipse = styled.div`
  background-image: url("https://file.rendit.io/n/YaycHcQibpA037w7zaAs.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.padding};
`;
const Text11 = styled.div`
  width: 324px;
  font-size: 12px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
  flex-grow: 1;
`;
const AddressNebraska = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 324px;
  gap: ${(props) => props.gap};
`;
const Text13 = styled.div`
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 600;
  letter-spacing: 0.56px;
  line-height: 24.29px;
  color: #ffffff;
  align-self: stretch;
  min-width: 324px;
`;
const Pngegg = styled.img`
  width: 43px;
  height: 43px;
`;
