import styled from "styled-components";

export const Container = styled.div`
  font-family: "Raleway";
  font-style: normal;
`;

export const ContainerBody = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  pointer-events: ${(props) => (props.isCartOpen ? "none" : "")};
  background-color: ${(props) => (props.isCartOpen ? "#39374838" : "#FFF")};
  opacity: ${(props) => (props.isCartOpen ? "0.5" : "1")};
  display: flex;
  flex-direction: column;
  background-size: 100vh;
`;

export const Body = styled.div`
  width: 1440px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
