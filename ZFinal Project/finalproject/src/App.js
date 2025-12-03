
import './App.css';



import {useState} from "react"



function Search(){
  const[title, setName]=useState("Sunflowers");
  const[artistDisplayName, setType]=useState("Vincent Van Gogh");
  const[image, setImage]=useState("sunflowers.jpg");
  const[artistDisplayBio, setBio]=useState("Dutch, Zundert 1853–1890 Auvers-sur-Oise");
  const[objectBeginDate, setDateb]=useState("1887");
  const[objectEndDate, setDated]=useState("1887");
  const[medium, setMedium]=useState("Oil on canvas");
  function changeState(e) {    setName(e.target.value);  } // asgn value
  function clickHandler() {   
 fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + title)
    .then(response => response.json())
    .then(data => {  
      //setType(data.types[0].type.name);
      //setImage(data.sprites.front_default);
      console.log(data);
      const objectID = data.objectIDs[0];
      fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + objectID)
        .then(response => response.json())
        .then(data => {
          setType(data.artistDisplayName);
          setImage(data.primaryImageSmall);
          setBio(data.artistDisplayBio);
          setDateb(data.objectBeginDate);
          setDated(data.objectEndDate);
          setMedium(data.medium);
        });
  });
        
  }

  return(
    <div><br></br>
    <label>Search for Artwork Seen at the Metropolitan Museum! <br></br>
    <br></br><input type="text" class="searchbutton" onChange={changeState} size="35" />
     <button class="button" onClick={clickHandler}>Search </button>
    </label>
  <Artwork title={title} artistDisplayName={artistDisplayName} image={image} bio={artistDisplayBio} dateb={objectBeginDate} dated={objectEndDate} medium={medium}/>
    </div>
  );
}


function Artwork(props){          
  return(        
  <div>
  <h4>
  
  </h4>
  <div class="card">
  <img src= {props.image} width="80%"/>
  <div class="container">
    <h4 class = "h4"><b><p>Title: {props.title}</p></b>
    <p>Artist: {props.artistDisplayName}</p>
    <b><p>Artist Bio: {props.bio} </p></b>
    <b><p>Begin Date: {props.dateb}</p></b>
    <b><p>End Date: {props.dated}</p></b>
    <b><p>Artwork Medium: {props.medium}</p></b></h4>
  </div>
</div>
            </div>
    )}
          
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        

       
       
      </header>



    </div>
  );
}

export default App;
