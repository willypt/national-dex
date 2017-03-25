import React from 'react';
import PokeListActions from '../actions/PokeListActions';
import PokeListStore from '../stores/PokeListStore';

const pokemonAllTypes = ["Normal", "Fire", "Fighting", "Water", "Flying", "Grass", "Poison", "Electric",
  "Ground", "Psychic", "Rock", "Ice", "Bug", "Dragon", "Ghost", "Dark", "Steel", "Fairy", "???"];

class TypesFilterDiv extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }
  instAndOpenModal() {
    var s = $("#type-filter-modal").modal();
    s.modal('open');  
  }

  render(){
    return (
      <div>
        <a className="dropdown-button btn col s12" href="#type-filter-modal" onClick={this.instAndOpenModal}>Type Filter</a>
        <div id="type-filter-modal" className="modal bottom-sheet">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
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