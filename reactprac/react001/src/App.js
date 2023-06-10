import React from "react";
import './App.css';

// import 경고 알아볼 것
import pracComponent from "./kuksPracComponent";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <pracComponent
        prop_value = 'FromApp.js'></pracComponent>
    </div>
  );
}

export default App;
