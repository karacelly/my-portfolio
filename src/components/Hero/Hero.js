import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Span } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding hero>
    <LeftSection>
      <Span>HI, MY NAME IS</Span>
      <SectionTitle main center>
        Kesya Amanda
      </SectionTitle>
      <SectionText>
        A curious third year computer science student who's passionate about
        technology, especially web and android development. Currently working as
        a Laboratory Asssistant also Operations and System Development (OSD)
        staff at Binus University.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
