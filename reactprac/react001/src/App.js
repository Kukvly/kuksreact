import React from "react";
import './App.css';

// import ImportComponent from "./R003_ImportComponent";
// import LifecycleEx from './R004_LifecycleEx';
// import LifecycleEx from './R005_LifecycleEx';
// import LifecycleEx from './R006_LifecycleEx';
// import LifecycleEx from './R007_LifecycleEx';
// import LifecycleEx from './R008_LifecycleEx';
// import Es6 from './R009_Es6';
// import Variable from './R010_var';
// import SpreadOperator from './R011_SpreadOperator';
// import ClassPrototype from './R012_ClassPrototype';
// import ArrowFunc from './R013_ArrowFunction';
// import ForEach from './R014_ForEach';
// import Props from './R017_Props';
//import PropsDatatype from './R018_PropsDatatype';
import PropsBoolean from './R019_PropsBoolean';

function App() {
  // return (
  //   <div>
  //     <h1>Start React 200!</h1>
  //     <p>CSS 적용하기</p>
  //     <PropsDatatype
  //       String='react'
  //       Number={200}
  //       Boolean={1==1}
  //       Array={[0, 1, 8]}
  //       Object Json={{react: '리액트', twohundred:'200'}}
  //       Function={console.log('FunctionProps: function!')}
  //     />
  //   </div>
  // );
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsObjVal Object JSON={{react:'리엑트', twohundred: '200'}}/>
    </div>
  )
}

export default App;
