import React from "react";
import "./App.scss";

function App() {
  let name = "Pedro";
  let cities = ["Berlin", "Hamburg", "Frankfurt"];
  return (
    <div>
      <h1>Hello, Beautiful World!</h1>
      <h2>Hello, {name}</h2>
      <h1>City Names</h1>
      <ul>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
