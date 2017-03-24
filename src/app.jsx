import React from 'react';
import '../styles/index.scss';
import AppNavbar from './components/AppNavbar';
import PokeList from './components/PokeList';
import { Card, CardTitle, Navbar, NavItem, Button, Row, Col, Icon } from 'react-materialize';

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <div>
            <AppNavbar></AppNavbar>
            <div className="container">
              <div className="row">
                <PokeList />
              </div>
            </div>
        </div>  
    );
  }
}
