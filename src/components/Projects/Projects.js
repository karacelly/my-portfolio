import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Div,
} from "./ProjectsStyles";
import Image from "next/image";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider divider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={p.image} />
            <Div>
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <UtilityList>
                {p.deploy ? (
                  <>
                    <ExternalLinks href={p.source}>Code</ExternalLinks>
                    <ExternalLinks href={p.visit}>Source</ExternalLinks>
                  </>
                ) : (
                  <ExternalLinks href={p.source}>Code</ExternalLinks>
                )}
              </UtilityList>
            </Div>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
