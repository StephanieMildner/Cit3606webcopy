import logo from './logo.svg';
import './App.css';



import {useState} from "react"



function Search(){
  const[name, setName]=useState("Eevee");
  const[type, setType]=useState("Normal");
  const[image, setImage]=useState("eevee.png");
  function changeState(e) {    setName(e.target.value);  } // asgn value
  function clickHandler() {   
 fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + name)
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
  Artwork
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
      <Pokemon name="objectIDs" type="Normal" image="eevee.png"/>

       
       
      </header>



    </div>
  );
}

export default App;
