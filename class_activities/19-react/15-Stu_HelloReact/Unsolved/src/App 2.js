import React from "react";
import HelloReact from "./components/HelloReact";
import HelloReact2 from "./components/HelloReact2";
import Banner from "./components/Banner";

function App() {
  return <div>
      <p>Hello</p>
      <HelloReact2 />
      <Banner />
      <table>
        <tr>
          <td>What</td>
        </tr>
      </table>
      <HelloReact />
  </div>;
}

export default App;
