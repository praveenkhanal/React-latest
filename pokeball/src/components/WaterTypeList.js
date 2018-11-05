import React, { Component } from 'react';
class WaterTypeList extends Component {
    render() {
        let waterPokemon = this.props.pokeData.map(function (poke, index) {
            return <li> { poke.name }</li>
        })
 
     return (
        
        <div>
        <h3>Water Type </h3>
     
       <ul className= "water">
       { waterPokemon }
       </ul>
       </div>
       
 
             );
     }
 }





export default WaterTypeList;
