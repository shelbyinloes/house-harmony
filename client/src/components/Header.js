import React from "react";
import {Navbar, Nav, MenuItem, NavItem, NavDropdown} from "react-bootstrap";

function Header() {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">House Harmony</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Chores
        </NavItem>
        <NavItem eventKey={2} href="#">
          Purchases
        </NavItem>
        <NavItem eventKey={3} href="#">
          Messaging
        </NavItem>
        <NavDropdown eventKey={4} title="My House" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1}>Personal Settings</MenuItem>
          <MenuItem eventKey={4.2}>Home Settings</MenuItem>
          <MenuItem eventKey={4.3}>Help</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={4.4}>Refer-A-Friend</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Header;
