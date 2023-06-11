import React from "react";
import './App.css';

// import 경고 알아볼 것
import ImportComponent from "./R003_ImportComponent";

// import LifecycleEx from './R004_LifecycleEx';
import LifecycleEx from './R005_LifecycleEx';
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <p>HTML 적용하기</p> */}
      <LifecycleEx
        prop_value = 'FromApp.js'
      />
    </div>
  );
}

export default App;
