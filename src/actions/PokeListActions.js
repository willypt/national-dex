'use strict';

import PokeListActionTypes from '../constants/PokeListActionTypes';
import ActionsHelper from './ActionsHelper'

const Actions = {
  //Load pokemon from GraphQL by Paging
  //Consider saving last pageNumber, result, and timestamp
  fetchPokemonList: function() {
    ActionsHelper.dispatch(PokeListActionTypes.FETCH_POKEMON_LIST, {})
  },
  appendPokemonList: function(arr) {
    ActionsHelper.dispatch(PokeListActionTypes.APPEND_POKEMON_LIST, {
      pokemonArr: arr
    })
  },
  openPokemonDetail: function(id) {
    ActionsHelper.dispatch(PokeListActionTypes.OPEN_POKEMON_DETAIL, {

    })
  },
  showError: function() {
    ActionsHelper.dispatch(PokeListActionTypes.SHOW_ERROR,{})
  }
  
  //todo
}

export default Actions;