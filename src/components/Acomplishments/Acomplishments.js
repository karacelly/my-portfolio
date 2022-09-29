import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { text: "Top 40 INC 2021" },
  { text: "Finalist ICPC Asia Jakarta Regional 2021" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle main>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);
export default Acomplishments;
