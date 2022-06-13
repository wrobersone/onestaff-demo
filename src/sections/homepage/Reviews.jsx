import React from "react";
import styled from "styled-components";
export const SectionReviews1 = ({}) => {
  return (
    <SectionReviewsRoot>
      <ColSpan>
        <Row>
          <Text1>What our travelers are saying!</Text1>
        </Row>
        <Row3>
          <ReviewCard>
            <Row1>
              <Col>
                <ImageProfile>
                  <Image1
                    src={"https://file.rendit.io/n/0wP2UtHi7t4UN2HbpA1V.png"}
                  />
                </ImageProfile>
              </Col>
              <Col1>
                <NurseName gap={"10px"}>
                  <Text2>Dorothea Dix</Text2>
                </NurseName>
                <NurseName gap={"10px"}>
                  <Text3>Travel Nurse</Text3>
                </NurseName>
                <NurseName gap={"11px"}>
                  {[
                    {
                      src: "https://file.rendit.io/n/5oOZSMJoUm1YCNVD8egi.svg",
                    },
                    {
                      src: "https://file.rendit.io/n/5oOZSMJoUm1YCNVD8egi.svg",
                    },
                    {
                      src: "https://file.rendit.io/n/5oOZSMJoUm1YCNVD8egi.svg",
                    },
                    {
                      src: "https://file.rendit.io/n/5oOZSMJoUm1YCNVD8egi.svg",
                    },
                    {
                      src: "https://file.rendit.io/n/5oOZSMJoUm1YCNVD8egi.svg",
                    },
                  ].map((data) => (
                    <ReacticonsfaFaStar src={data.src} />
                  ))}
                </NurseName>
              </Col1>
            </Row1>
            <Row2 flexDirection={"column"}>
              <Row2 flexDirection={"row"}>
                <Paragraph>
                  “I’ve traveled with this company for years. They always have
                  my back and I would recommend them to anyone! Louie is my
                  recruiter and he’s seriously THE BEST.”
                </Paragraph>
              </Row2>
            </Row2>
          </ReviewCard>
        </Row3>
      </ColSpan>
    </SectionReviewsRoot>
  );
};
const SectionReviewsRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  min-width: 1512px;
`;
const ColSpan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 1512px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  min-width: 1492px;
  padding: 10px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 1492px;
  font-size: 48px;
  font-family: Open Sans;
  color: #262626;
  flex-grow: 1;
`;
const Row3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 1002px;
  padding: 10px 255px;
`;
const ReviewCard = styled.div`
  box-shadow: 0px 8px 20px 4px rgba(0, 0, 0, 0.25);
  width: 1002px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20px;
  padding: 20px;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 962px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const ImageProfile = styled.div`
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
`;
const Image1 = styled.img`
  width: 88px;
  height: 88px;
`;
const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;
const Text2 = styled.div`
  width: 853px;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 600;
  line-height: 36px;
  color: #3e3f43;
  flex-grow: 1;
`;
const Text3 = styled.div`
  width: 853px;
  font-size: 16px;
  font-family: Open Sans;
  text-decoration: underline;
  font-weight: 600;
  line-height: 30px;
  color: #18c5ad;
  flex-grow: 1;
`;
const Paragraph = styled.div`
  width: 962px;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 30px;
  color: #393939;
  flex-grow: 1;
`;
const NurseName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 853px;
  gap: ${(props) => props.gap};
`;
const ReacticonsfaFaStar = styled.img`
  width: 30.29px;
  height: 30.67px;
`;
const Row2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 962px;
  flex-direction: ${(props) => props.flexDirection};
`;
