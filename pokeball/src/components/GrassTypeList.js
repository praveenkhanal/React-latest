import React, { Component } from 'react';
class GrassTypeList extends Component {
    render() {
        let grassPokemon = this.props.pokeData.map(function (poke, index) {
            return <li> { poke.name }</li>
        })
 
     return (
         <div>
         <h3>Grass Type </h3>
     
        <ul className= "grass">
        { grassPokemon }
        </ul>
        </div>
 
             );
     }
 }





export default GrassTypeList;
