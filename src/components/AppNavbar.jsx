import React from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';

export default class AppNavbar extends React.Component {
  render() {
    return (
      <Row>
        <Navbar brand='National Pokedex' right>
        </Navbar>
      </Row>
    );
  }
}