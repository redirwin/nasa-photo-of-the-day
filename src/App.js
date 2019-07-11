import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Header from "./components/Header";
import Today from "./components/Today";
import YourChoice from "./components/YourChoice";

function App() {
  return (
    <div className="App">
      <Header />
      <Today />
      <YourChoice />
    </div>
  );
}

export default App;
