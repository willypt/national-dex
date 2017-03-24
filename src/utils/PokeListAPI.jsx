import Fetch from 'graphql-fetch';
import PokeListActions from '../actions/PokeListActions';

const fetch = new Fetch('//pokeapi-graphiql.herokuapp.com/');
const POKEDEX_QUERY = `
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

export default {
  fetchPokemonByOffset(offset, limit) {
    var queryParam = {
      offset: offset,
      limit: limit
    };
    fetch(POKEDEX_QUERY, queryParam).then(function(result) {
      
      console.log(result);
    }) 
  }
}