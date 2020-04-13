import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Kard from "./components/Kard";

let chars = [];
chars.push({
  name: "Mr. Krabs",
  job: "Restaurant Owner",
  location: "A Giant Anchor",
  url: "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131"
});
chars.push({
  name: "Spongebob",
  job: "Fry Cook",
  location: "A Pinapple Under the Sea",
  url: "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014"
});
chars.push({
  name: "Squidward",
  job: "Cashier",
  location: "An Easter Island Head",
  url: "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626"
});

function App() {
  
  return (
    <Wrapper>
      <Title>Friends List</Title>
      
      { chars.map(element => {
        return(
          <Kard 
            key={element.name} 
            name={element.name} 
            job={element.job} 
            location={element.location} 
            url={element.url} 
          />
        )
      })}
      
    </Wrapper>
  );
}

export default App;
