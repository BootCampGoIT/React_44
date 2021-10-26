import React from "react";
import { SectionContainer } from "./SectionStyled";
const Section = ({ children, title }) => {
  return (
    <SectionContainer>
      <h2 className='sectionTitle'>{title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
