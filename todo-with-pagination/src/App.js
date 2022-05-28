import "./App.css";
import React, { useEffect, useState } from "react";
import Todos from "./components/Todos";
function App() {

  return (
    <div>
      <div className="App">
        <Todos />
      </div>
    </div>
  );
}

export default App;
