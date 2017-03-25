import React from 'react';
import PokeListActions from '../actions/PokeListActions';
import PokeListStore from '../stores/PokeListStore';

let pokedexOffset = 0;


class SnorlaxDiv extends React.Component {
  render () {
    return (
      <div className="row center-align">
          <div className="col s12"><img className="center-align" src="//willypt.github.io/media/img/143.png"/></div>
        </div>
    );
  }
}

class Loading extends React.Component {
  render() {
    return (
      <div className="col s12 center-align">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class PokeCard extends React.Component {
  constructor() {
    super();
    this.instAndOpenModal = this.instAndOpenModal.bind(this)
    this.render = this.render.bind(this);
  }
  instAndOpenModal() {
    var pokemon = this.props.pokemon;
    var s = $("#modal" + pokemon.pkdx_id).modal();
    console.log(s);
    s.modal('open');  
  }
  render() {
    var pokemon = this.props.pokemon;
    return (
      <div className="col s12 m4 l3">
        <a onClick={this.instAndOpenModal}>
          <div className="card hide-on-small-only waves-effect waves-block waves-orange">
            <div className="card-image">
              <img src={pokemon.sprite} />
              <span className="card-title black-text"><span className="poke-number">#{pokemon.pkdx_id}</span>{pokemon.name}</span>
            </div>
          </div>
          <div className="card horizontal hide-on-med-and-up waves-effect waves-block waves-orange">
            <div className="card-image">
              <img src={pokemon.sprite} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <span className="card-title"><span className="poke-number">#{pokemon.pkdx_id}</span>{pokemon.name}</span>
              </div>
            </div>
          </div>
        </a>

        <div id={"modal" + pokemon.pkdx_id} className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4><span className="poke-number">#{pokemon.pkdx_id}</span>{pokemon.name}</h4>
            <div className="row">
              <div className="col s12 center-align">
                <img src={pokemon.sprite} />
              </div>
              <div className="col s12 center-align">
                {pokemon.types.map(function(type, index) {
                  return (<div className="chip" key={index}>{type}</div>)
                })}
              </div>
              <div className="col s12">
                  <ul className="collection with-header center-align">
                    {pokemon.moves.map(function(move, index) {
                      return <li className="collection-item" key={index}>{move}</li>
                    })}
                  </ul>
              </div>
            </div>
            {/*<pre>{JSON.stringify(pokemon, null, 2) }</pre>*/}
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>
          </div>
        </div>

        <script>
          $({"modal" + pokemon.pkdx_id}).modal();
        </script>
      </div>
    )
  }
}

function getState() {
  return {
    page: PokeListStore.getPage(),
    loadAllPokemonDone : PokeListStore.getLoadAllPokemonDone(),
    pokemonLists: PokeListStore.getPokemonLists(),
    isLoading: PokeListStore.isLoading(),
  }
}

class PokeList extends React.Component {
  constructor() {
    super();
    this.state = getState();
    this._onChange = this._onChange.bind(this);
    this.render = this.render.bind(this);
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
  handleClick() {
    PokeListActions.fetchPokemonList()
  }
  render() {
    var pokemonList = this.state.pokemonLists
    return (
      <div className="">
        {pokemonList.map(function(pokemon, index){
          return <PokeCard key={index} pokemon={pokemon}/>
        })}
        {this.state.isLoading? <Loading /> : null}
        <a onClick={this.handleClick} className="col s12 waves-effect waves-light btn">Load More</a>
        <SnorlaxDiv />
      </div>
    );
  }
}

export default PokeList;
