import React from "react";
import styled from "styled-components";
export const SectionHero1 = ({}) => {
  return (
    <SectionHeroRoot>
      <Text1>About</Text1>
    </SectionHeroRoot>
  );
};
const SectionHeroRoot = styled.div`
  height: 441px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  min-width: 1512px;
`;
const Text1 = styled.div`
  text-align: center;
  display: flex;
  font-size: 128px;
  font-family: Open Sans;
  font-weight: 700;
  color: #ffffff;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 561px;
`;
