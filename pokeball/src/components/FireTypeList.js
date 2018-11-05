import React, { Component } from 'react';

class FireTypeList extends Component {
   render() {
       let firePokemon = this.props.pokeData.map(function (poke, index) {
           return (
            <li className={ poke.types[0].type.name }> 
                <img src={ poke.sprites.front_default } alt={ poke.name } />
                <img src={ poke.sprites.back_default } alt={ poke.name } />
                <div>
                    <strong>  { poke.name }  </strong>
                    <p>Attribute List</p>
                    <ul>
                        <li>Weight: {poke.weight} </li>
                        <li>Height: {poke.height} </li>
                    </ul>

                    <p>Stats</p>
                    <span>{ poke.stats[0].stat.name} :  { poke.stats[0].base_stat }</span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <p> Species: </p>
                    <span>{ poke.species.name } : {poke.species.name[0] }</span>
                </div>
                <div>
                    <p> Activity:</p>
                    <span> { poke.abilities[0].ability.name } :  { poke.abilities[0].ability.name } </span>
                    <span> { poke.abilities[1].ability.name } :  { poke.abilities[1].ability.name[0] } </span>
                
                </div>
            </li>
           );
       
           })
    return (
        <div>
        <h3>Fire Type </h3>
    
        <ul>
        { firePokemon }
        </ul>
        <hr/>
        </div>
    )
   }
    }
export default FireTypeList