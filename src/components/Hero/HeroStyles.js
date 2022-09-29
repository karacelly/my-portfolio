import styled from "styled-components";

export const Span = styled.p`
  font-size: 2.5vh;
  padding: 1vw 0;
  letter-spacing: 0.2em;
  background: linear-gradient(121.57deg, #ff5f5f 9%, #ff9898 40%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    padding-bottom: 0.5vh;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2vh;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  margin-top: 10vh;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
  }
`;
