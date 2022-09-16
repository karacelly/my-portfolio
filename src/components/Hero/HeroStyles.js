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
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
