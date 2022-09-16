import React from "react";
import Background from "../components/Background/Background";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Background>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </Background>
  );
};
