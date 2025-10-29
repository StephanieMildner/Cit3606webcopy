import logo from './logo.svg';
import './App.css';


import {useState} from "react"

function Pokemon(props){
    return(
        <div>
            <h4>
              <br></br>
              <br></br>
              

            
            </h4>
            <div class="card">
  <img src= {props.image}/>
  <div class="container">
    <h4><b>{props.name}</b></h4>
    <p>Type = {props.type}</p>
  </div>
</div>
            </div>
    )}
         

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Pokemon name="Eevee" type="Normal" image="eevee.png"/>
        <Pokemon name="Umbreon" type="Dark" image="umbreon.png"/>
        <Pokemon name="Vaporeon" type="Water" image="vaporeon.png"/>
        <Pokemon name="Flareon" type="Fire" image="flareon.png"/>
       
       
      </header>
    </div>
  );
}

export default App;
