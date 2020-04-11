import React from "react";

const myName = "Matt";
const whatDoIThink = "is cool";

let removeVowels = string => {
  return string.replace(/[aeiou]/gi, '');
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {myName}</h1>
          <h2>My name has {myName.length} letters</h2>
          <h2>I think React {whatDoIThink}.</h2>
          <h2>My name without any vowels is: {removeVowels(myName)}.</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
