'use strict';

import {Pokemon} from '../components/Pokemon';

import PokeListDispatcher from '../dispatcher/AppDispatcher';
import PokeListActionTypes from '../constants/PokeListActionTypes';
import PokeListAPI from '../utils/PokeListAPI';
import EventEmitter from 'events';
import underscore from 'underscore';

const LIMIT = 5;

var _loadAllPokemonDone = false;
var _isError = false;
var _isLoading = false;
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
  isLoading: function() {
    return _isLoading
  },
  isError: function() {
    return _isError
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
      _isLoading = false;
      break;
    case PokeListActionTypes.FETCH_POKEMON_LIST:
      _isLoading = true;
      var page = _page;
      PokeListAPI.fetchPokemonByOffset(page * LIMIT, LIMIT);
      var newPage = _page + 1;
      setPage(newPage);
      break;
    case PokeListActionTypes.SHOW_ERROR:
      _isError = true;
      break;
    default:
      return true;
  }
  PokeListStore.emitChange();
  return true;
});

export default PokeListStore;