import "./styles.scss";

import React from "react";

import { Nav, NavItem, NavLink } from "reactstrap";

export const Header = () => {
  return (
    <Nav className="navbar justify-content-between py-4">
      <NavItem className="item" active>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem className="item">
        <NavLink href="#">Blog</NavLink>
      </NavItem>
      <NavItem className="item">
        <NavLink href="#">Shop</NavLink>
      </NavItem>
      <NavItem className="item">
        <NavLink href="#">Pricing</NavLink>
      </NavItem>{" "}
      <NavItem className="item">
        <NavLink href="#">Contact</NavLink>
      </NavItem>
    </Nav>
  );
};
