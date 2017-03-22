import React from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';

export default class AppNavbar extends React.Component {
  render() {
    return (
      <Row>
        <Navbar brand='National Pokedex' right>
          <NavItem href='/pokemon-list'>Change</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
      </Row>
    );
  }
}