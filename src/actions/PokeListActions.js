'use strict';

import PokeListActionTypes from '../constants/PokeListActionTypes';
import ActionsHelper from './ActionsHelper'

const Actions = {
  //Load pokemon from GraphQL by Paging
  //Consider saving last pageNumber, result, and timestamp
  fetchPokemonList: function(pageNumber) {
    ActionsHelper.dispatch(PokeListActionTypes.FETCH_POKEMON_LIST, {
      pageNumber: pageNumber
    })
  },
  
  //todo

  //types is an array and has all classes as default value
  filterPokemonByTypes(types) {
    PokeListDispatcher.dispatch({
      type: PokeListActionTypes.FILTER_POKEMON_BY_TYPES,
      types
    })
  },

  resetFilter: function() {
    PokeListDispatcher.dispatch({
      type: PokeListActionTypes.RESET_FILTER
    })
  }
}

export default Actions;