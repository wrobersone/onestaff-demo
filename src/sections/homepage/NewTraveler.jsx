import React from "react";
import styled from "styled-components";
export const SectionNewTraveler1 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <SectionNewTravelerRoot>
      <ColSpan>
        <Text1>New Traveler?</Text1>
        <Row1>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
        </Row1>
        <Row2>
          <Button1 onClick={(e) => Button1Function(e, "Button1")}>
            Learn more
          </Button1>
        </Row2>
      </ColSpan>
      <ColSpan1>
        <Compass src={"https://file.rendit.io/n/hUkRrNA8Niw51Gitnj3M.png"} />
      </ColSpan1>
    </SectionNewTravelerRoot>
  );
};
const SectionNewTravelerRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-width: 1002px;
  padding: 0px 255px;
`;
const ColSpan = styled.div`
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
  font-size: 90px;
  font-family: Open Sans;
  letter-spacing: 0.45px;
  line-height: 85.5px;
  text-transform: capitalize;
  color: #262626;
  align-self: stretch;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 491px;
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
  line-height: 32.97px;
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
const ColSpan1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  border-radius: 20px;
`;
const Compass = styled.img`
  width: 491px;
  height: 685px;
`;
