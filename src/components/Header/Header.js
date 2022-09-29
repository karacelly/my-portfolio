import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiOutlineProject,
} from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";

import {
  Container,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = (props) => (
  <Container>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink style={{ display: "flex", alignItems: "center" }}>
            <AiOutlineProject size="3rem" style={{ paddingRight: "1vh" }} />
            <Span>Projects</Span>
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink style={{ display: "flex", alignItems: "center" }}>
            <HiOutlineDesktopComputer
              size="3rem"
              style={{ paddingRight: "1vh" }}
            />
            <Span>Technologies</Span>
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#experience">
          <NavLink style={{ display: "flex", alignItems: "center" }}>
            <MdWorkOutline size="3rem" style={{ paddingRight: "1vh" }} />
            <Span>Experience</Span>
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
