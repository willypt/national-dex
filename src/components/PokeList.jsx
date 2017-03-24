import React from 'react';
import PokeListActions from '../actions/PokeListActions';
import PokeListStore from '../stores/PokeListStore';

let pokedexOffset = 0;

function getState() {
  return {
    page: PokeListStore.getPage(),
    loadAllPokemonDone : PokeListStore.getLoadAllPokemonDone(),
    pokemonLists: PokeListStore.getPokemonLists()
  }
}

class PokeList extends React.Component {
  constructor() {
    super();
    this.state = getState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    PokeListStore.addChangeListener(this._onChange)
    PokeListActions.fetchPokemonList();
    PokeListActions.fetchPokemonList();
  }
  componentWillUnmount() {
    PokeListStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState(getState());
  }
  render() {
    return (
      <div className="col s12 m4 l3">
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

export default PokeList;
