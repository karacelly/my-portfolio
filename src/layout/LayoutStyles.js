import styled from "styled-components";

export const Container = styled.div`
  max-width: 80vw;
  width: 100%;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 100%;
  }
`;
