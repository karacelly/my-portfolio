import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import BorderButton from "../../styles/GlobalComponents/BorderButton";
import { LeftSection, Span } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding hero>
    <LeftSection>
      <Span>HI, MY NAME IS</Span>
      <SectionTitle main center>
        Kesya Amanda
      </SectionTitle>
      <SectionText>
        Third year computer science student and currently working as a
        laboratory asssistant at Binus University. Passionate about technology,
        especially web and android development.
      </SectionText>
      <BorderButton>Learn More</BorderButton>
    </LeftSection>
  </Section>
);

export default Hero;
