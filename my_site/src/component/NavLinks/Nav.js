import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }

}