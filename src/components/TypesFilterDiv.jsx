import React from 'react';
import PokeListActions from '../actions/PokeListActions';
import PokeListStore from '../stores/PokeListStore';

const pokemonAllTypes = ["Normal", "Fire", "Fighting", "Water", "Flying", "Grass", "Poison", "Electric",
  "Ground", "Psychic", "Rock", "Ice", "Bug", "Dragon", "Ghost", "Dark", "Steel", "Fairy", "???"];

function getState() {
  return {
    activeTypes: PokeListStore.getTypes(),
  }
}

class TypesFilterDiv extends React.Component {
  componentDidMount() {
    PokeListStore.addChangeListener(this._onChange)
  }
  componentWillUnmount() {
    PokeListStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState(getState());
  }
  constructor() {
    super();
    this.state = getState();
    this.render = this.render.bind(this);
    this._onChange = this._onChange.bind(this);
  }
  instAndOpenModal() {
    var s = $("#type-filter-modal").modal();
    s.modal('open');  
  }

  render(){
    return (
      <div>
        <a className="dropdown-button btn col s12" href="#type-filter-modal" onClick={this.instAndOpenModal}>Type Filter</a>
        <div id="type-filter-modal" className="modal">
          <div className="modal-content">
            <h4>Filter Type</h4>
            <div className="row">
              {pokemonAllTypes.map(function(type, index) {
                return (
                  <p className="col s6" key={index}>
                    <input type="checkbox" className="" value={type} id={"type" + index}/>
                    <label htmlFor={"type" + index}>{type}</label>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">CLose</a>
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Apply</a>
          </div>
        </div>

      </div>
    )
  }

}

export default TypesFilterDiv;