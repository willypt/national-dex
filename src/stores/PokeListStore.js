'use strict';

import {Pokemon} from '../components/Pokemon';

import PokeListDispatcher from '../dispatcher/AppDispatcher';
import PokeListActionTypes from '../constants/PokeListActionTypes';
import PokeListAPI from '../utils/PokeListAPI';
import EventEmitter from 'events';
import underscore from 'underscore';

const LIMIT = 10;
const fetch = require('graphql-fetch')('//pokeapi-graphiql.herokuapp.com/graphql');
const QUERY = `
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

var _loadAllPokemonDone = false;
var _pokemonLists = [];
var _pokemonViewedLists = [];
var _types = [];
var _page = 0; //nextPage

function setLoadAllPokemonDone(data) {
  _loadAllPokemonDone = data;
}

function setPokemonLists(data) {
  _pokemonLists = data;
}

function setPokemonViewedLists(data) {
  _pokemonViewedLists = data;
}

function setTypes(data) {
  _types = data;
}

function setPage(data) {
  _page = data;
}

const PokeListStore = underscore.extend({}, EventEmitter.prototype, {
  getLoadAllPokemonDone: function() {
    return _loadAllPokemonDone;
  },
  getPokemonLists: function() {
    return _pokemonLists
  },
  getPokemonViewedLists: function() {
    return _pokemonViewedLists
  },
  getTypes: function() {
    return _types
  }, 
  getPage: function() {
    return _page
  },
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  emitChange: function () {
    this.emit('change');
  },
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

PokeListDispatcher.register(function (payload) {

  console.log("==get payload==");
  console.log(payload);
  var action = payload.action;

  switch (action.actionType) {
    case PokeListActionTypes.APPEND_POKEMON_LIST:
      setPokemonLists(_pokemonLists.concat(action.data.pokemonArr));
      console.log("new pokemon lists", _pokemonLists, _page);
      break;
    case PokeListActionTypes.FETCH_POKEMON_LIST:
      var page = _page;
      PokeListAPI.fetchPokemonByOffset(page * LIMIT, LIMIT);
      var newPage = _page + 1;
      setPage(newPage);
      break;
    default:
      return true;
  }
  PokeListStore.emitChange();
  return true;
});

export default PokeListStore;