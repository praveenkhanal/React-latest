import React, { Component } from 'react';
import './App.css';
import FireTypeList from './components/FireTypeList';
import WaterTypeList from './components/WaterTypeList';
import GrassTypeList from './components/GrassTypeList';
import data from './data.js';


const ogPokemon = {
  
  grass: [
    {id :1, name: 'Bulbasaur', size: 'small' },
    {id :2, name: 'Ivysaur', size: 'medium' },
    {id :3, name: 'Venusaur', size: 'large' }
  ],
  water: [
    {id :1, name: 'Squirtle', size: 'small' },
    {id :2, name: 'Wartortle', size: 'medium' },
    {id :3, name: 'Blastoise', size: 'large' }
  ]
  
  
}

class App extends Component {
  render() {
    return (
      <div className="app"> 
      <h1> Original Pokemon </h1>
      <FireTypeList pokeData={ data } />
      <WaterTypeList pokeData={ ogPokemon.water } />
      <GrassTypeList pokeData={ ogPokemon.grass } />
      
      
      <hr/>
       
      

      </div>
    );
  }
}

export default App;
