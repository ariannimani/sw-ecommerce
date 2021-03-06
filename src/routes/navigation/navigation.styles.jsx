import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  z-index: 1;
`;

export const NavItem = styled(NavLink)`
  padding: 0 10px;
  color: #43464e;
  text-decoration: none;
`;
export const NavItems = styled.ul`
  position: static;
  height: 20px;
  left: 0%;
  right: 0%;
  top: calc(50% - 20px / 2 - 16px);

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

  .active {
    color: #5ece7b;
    padding: 20px;
    border-bottom: 1px solid #5ece7b;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14);
`;
export const DropdownContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 114px;
  height: auto;
`;

export const DropdownItems = styled.li`
  background-color: #ffffff;
  padding: 8px 12px;
  color: black;
  width: auto;
  height: 45px;
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;

export const DrpBtn = styled.button`
  padding: 0;
  width: 50px;
  border: 0;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  outline: 0;
  font-size: 18px;
`;

export const CartSVG = styled.svg`
  margin-top: 5px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  background-image: url("../../../assets/svg/empty-cart.svg");
  background-repeat: no-repeat;
`;

export const LogoSVG = styled.svg`
  width: 50px;
  height: 50px;
  background-image: url("../../assets/svg/a-logo.svg");
  background-repeat: no-repeat;
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

export const CartUl = styled.ul``;
export const CartLi = styled.ul``;

export const NumberItem = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  padding: 4px;
  background: #000;
  color: #fff;
  text-align: center;
  margin-left: -4px;
  margin-top: -4px;
  font: 12px Arial, sans-serif;
`;

export const DropdownCart = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14);
  margin-right: 50px;
  width: auto;
  max-height: 677px;
  overflow: auto;
  background-color: #ffffff;
`;
export const DropdownCartContent = styled.div``;
