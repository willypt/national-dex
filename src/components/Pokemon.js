'use strict';

import Immutable from 'immutable';
import UtilFun from './utils';

const PokemonBaseRecord = Immutable.Record({
  pkdx_id: 0,
  name: '',
  sprite: '',
  types:[],
  moves: []
    // {
    //   move_name: '',
    //   move_description: ''
    // }
});

class Pokemon extends PokemonBaseRecord {
  constructor(props) {
    let pokemon = props.node;
    let pkdx_id = pokemon.national_id;
    let name = UtilFun.toTitleCase(pokemon.name)
    let sprite = '';
    try {
      pokemon.sprites.edges.sort(function(a, b){
        var keyA = new Date(a.node.modified),
            keyB = new Date(b.node.modified);
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
      });
      sprite = "//willypt.github.io" + pokemon.sprites.edges[0].node.image;
    } catch (exception) {
      console.log(exception)
    }
    let types = [];
    pokemon.types.edges.forEach(function(type) {
      types.push(type.node.name)
    });
    let moves = [];
    pokemon.moves.edges.forEach(function(move) {
      moves.push(move.node.name)
    })
    super({pkdx_id: pkdx_id, name: name, sprite: sprite, types: types, moves: moves});
  }  
}

export {Pokemon, PokemonBaseRecord};