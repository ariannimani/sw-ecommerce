import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  height: 80px;
  width: 100%;
  width: auto;
`;

export const NavItems = styled.ul`
  position: static;
  height: 20px;
  left: 0%;
  right: 0%;
  top: calc(50% - 20px / 2 - 16px);

  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 30px 0px;
  list-style: none;
`;

export const NavItem = styled(Link)`
  padding: 0 10px;
  color: #43464e;
  text-decoration: none;
  &:active {
    color: #5ece7b;
    padding-bottom: 20px;
    border-bottom: 1px solid #5ece7b;
  }
`;
export const NavCurrency = styled.div`
  padding: 0 5px;
`;

export const NavCart = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 5.84%;
  bottom: 29.11%;
  background: #43464e;
  width: 20px;
  height: 20px;
`;

export const NavItemsRight = styled.div`
  display: flex;
  flex-direction: row;
`;
