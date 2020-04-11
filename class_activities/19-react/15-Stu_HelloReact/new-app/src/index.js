import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

function HelloReact() {
    return <p>Hello World!</p>;
  }

function App() {
    return <HelloReact />;
  }

ReactDOM.render(<App />, document.getElementById("root"));
