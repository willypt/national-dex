import React from 'react';
import { gql, graphql } from 'react-apollo';

let pokedexOffset = 0;
pokeListings: [];

const Listings = ( {pokedex, loadMoreEntries}) => {
  console.log(pokedex);
  return (<div>
    <a onClick={loadMoreEntries}>Load</a>
  </div>);
}

const POKEDEX_QUERY = gql`
  query FetchPokes($offset: Int!, $limit: Int!) {
    pokedex {
      id
      pokemon(start: $offset, number: $limit) {
        edges {
          node {
            national_id
            name
            types {
              edges {
                node {
                  name
                }
              }
            }
            sprites {
              edges {
                node {
                  modified
                  image
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ListingsWithData = graphql( POKEDEX_QUERY, {
  options(props) {
    return {
      variables : {
        offset: pokedexOffset,
        limit: 10
      }
    }
  },
  props({ data: {pokedex, fetchMore} }) {
    return {
      pokedex,
      loadMoreEntries() {
        return fetchMore({
          variables: {
            offset: pokedexOffset+=10
          },
          updateQuery: (previousResult, {fetchMoreResult}) => {
            if(!fetchMoreResult.pokedex) {
              console.log("asd", fetchMoreResult)
              return previousResult; 
            } else {
              console.log("fetch new", previousResult.pokedex.pokemon.edges, fetchMoreResult.pokedex.pokemon.edges)
              let newDexs = previousResult.pokedex.pokemon
              newDexs = newDexs.concat(fetchMoreResult.pokedex.pokemon);
              console.log(newDexs);
              return Object.assign({}, previousResult, {
                pokedex: newDexs
              });
            }
            
            
          }
        });
      }
    }
  }
})(Listings)

class Pokecard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col s12 m4 l3">
        <ListingsWithData />
        <div className="card hide-on-small-only waves-effect waves-block waves-orange">
          <div className="card-image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
            <span className="card-title black-text"><span className="poke-number">#1</span>Bulbasaur</span>
          </div>
        </div>
        <div className="card horizontal hide-on-med-and-up waves-effect waves-block waves-orange">
          <div className="card-image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title"><span className="poke-number">#1</span>Bulbasaur</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokecard;
