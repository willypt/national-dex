import React from 'react';
import '../styles/index.scss';
import { Card, CardTitle, Navbar, NavItem, Button, Row, Col, Icon } from 'react-materialize';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Row>
            <Navbar brand='National Pokedex Viewer' right>
              <NavItem href='/pokemon-list'>Change</NavItem>
              <NavItem href='components.html'>Components</NavItem>
            </Navbar>
          </Row>
          <div className="container">
            <div className="row">
              <div className="col s12 m4 l3">
                <div className="card hide-on-small-only waves-effect waves-block waves-orange">
                  <div className="card-image">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
                    <span className="card-title black-text"><span className="poke-number">#1</span>Bulbasaur</span>
                  </div>
                </div>
                <div className="card horizontal hide-on-med-and-up waves-effect waves-block waves-orange">
                  <div className="card-image">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"/>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <span className="card-title"><span className="poke-number">#1</span>Bulbasaur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    );
  }
}
