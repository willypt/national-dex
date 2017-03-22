import React from 'react';
import '../styles/index.scss';
import AppNavbar from './components/appnavbar';
import PokeCard from './components/pokecard';
import { Card, CardTitle, Navbar, NavItem, Button, Row, Col, Icon } from 'react-materialize';
import { Axios } from 'axios';
// Use Axios to fetch v2 api

const axios = new Axios();
export default class App extends React.Component {
  getPokeLists() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=811')
      .then(function(response) {
        console.log(response)
      });
  }
  constructor() {
    super();
    this.getPokeLists();
  }
  render() {
    return (
        <div>
          <AppNavbar></AppNavbar>
          <div className="container">
            <div className="row">
              <PokeCard />
            </div>
          </div>
        </div>  
    );
  }
}
