import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  Container,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <CompanyContainer>
        <Slogan>&copy; 2022 by Kesya Amanda</Slogan>
      </CompanyContainer>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/karacelly">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:aracellykesya@gmail.com">
            <AiFillGoogleCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/kesyawijaya/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/kesyaawijaya/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </Container>
  );
};

export default Footer;
