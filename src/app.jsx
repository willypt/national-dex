import React from 'react';
import '../styles/index.scss';
import AppNavbar from './components/appnavbar';
import PokeCard from './components/pokecard';
import { Card, CardTitle, Navbar, NavItem, Button, Row, Col, Icon } from 'react-materialize';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '//pokeapi-graphiql.herokuapp.com'
  })
});

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
                <ApolloProvider client={client}>
                  <PokeCard />
                </ApolloProvider>
              </div>
            </div>
        </div>  
    );
  }
}
