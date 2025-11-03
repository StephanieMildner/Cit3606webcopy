import logo from './logo.svg';
import './App.css';



import {useState} from "react"



function Search(){
  const[name, setName]=useState("Eevee");
  const[type, setType]=useState("Normal");
  const[image, setImage]=useState("eevee.png");
  function changeState(e) {    setName(e.target.value);  } // asgn value
  function clickHandler() {   
 fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => response.json())
    .then(data => {  
      setType(data.types[0].type.name);
      setImage(data.sprites.front_default);
  });
        
  }

  return(
    <div>
    <label>Choose a Pokemon! 
    <input type="text" onChange={changeState} />
     <button onClick={clickHandler}>Enter </button>
    </label>
  <Pokemon name={name} type={type} image={image}/>
    </div>
  );
}


function Pokemon(props){          
  return(        
  <div>
  <h4>
  Pokedex Cards
  </h4>
  <div class="card">
  <img src= {props.image} width="80%"/>
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
        <Search/>
      <Pokemon name="Eevee" type="Normal" image="eevee.png"/>
        <Pokemon name="Umbreon" type="Dark" image="umbreon.png"/>
        <Pokemon name="Vaporeon" type="Water" image="vaporeon.png"/>
        <Pokemon name="Flareon" type="Fire" image="flareon.png"/>
       
       
      </header>



    </div>
  );
}

export default App;
