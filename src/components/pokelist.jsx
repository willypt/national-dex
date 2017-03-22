import { gql, graphql } from 'react-apollo';
import React from 'react';

function PokeGraphService({data: {pokemon}})

class Pokelist extends React.Component {

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Pokelist;
