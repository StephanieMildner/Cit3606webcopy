import logo from './logo.svg';
import './App.css';



import {useState} from "react"



function Search(){
  const[title, setName]=useState("Sunflowers");
  const[artistDisplayName, setType]=useState("Vincent Van Gogh");
  const[image, setImage]=useState("https://images.metmuseum.org/CRDImages/ep/original/DP-41223-001.jpg");
  function changeState(e) {    setName(e.target.value);  } // asgn value
  function clickHandler() {   
 fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q" )
    .then(response => response.json())
    .then(data => {  
      setType(data.types[0].type.name);
      setImage(data.sprites.front_default);
  });
        
  }

  return(
    <div>
    <label>Search for artwork! <br></br>
    <input type="text" onChange={changeState} />
     <button onClick={clickHandler}>Search </button>
    </label>
  <artwork title={title} artistDisplayName={artistDisplayName} image={image}/>
    </div>
  );
}


function artwork(props){          
  return(        
  <div>
  <h4>
  Artwork
  </h4>
  <div class="card">
  <img src= {props.image} width="80%"/>
  <div class="container">
    <h4><b>{props.title}</b></h4>
    <p>Artist = {props.artistDisplayName}</p>
  </div>
</div>
            </div>
    )}
          
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search/>
      <artwork title="Sunflowers" artistDisplayName="Vincent Van Gogh" image="https://images.metmuseum.org/CRDImages/ep/original/DP-41223-001.jpg"/>

       
       
      </header>



    </div>
  );
}

export default App;
