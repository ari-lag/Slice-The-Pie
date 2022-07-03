
import React, { useRef, useEffect, useState  } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import './App.css';
import StepProgressBar from './component/Progressbar.jsx'
import Header from './component/Header.jsx';
import Revenues from './component/Revenues.jsx';
import Expenses from './component/Expenses.jsx';
import Result1 from './component/Result1.jsx';
import Result2 from './component/Result2.jsx';
import Result_title from './component/Result_title.jsx';

/* App */




function App() {

// for revenues
  const[input1, updateinput1] = useState(0);
  const[input2, updateinput2] = useState(0);
  const[input3, updateinput3] = useState(0);
  const[input4, updateinput4] = useState(0);
  const[input5, updateinput5] = useState(0);
  const[input6, updateinput6] = useState(0);
  const[input7, updateinput7] = useState(0);
  const[input8, updateinput8] = useState(0);
  const[total, updatetotal] = useState(0);
  const[total_left, updatetotal_left] = useState(100);

  const inputs = [input1,input2,input3,input4,input5,input6,input7,input8, total,total_left]

  const updateinputs = [updateinput1,updateinput2,updateinput3,updateinput4,updateinput5,updateinput6,updateinput7,updateinput8, updatetotal,updatetotal_left]


// for expenses
  const[input1_e, updateinput1_e] = useState(0);
  const[input2_e, updateinput2_e] = useState(0);
  const[input3_e, updateinput3_e] = useState(0);
  const[input4_e, updateinput4_e] = useState(0);
  const[input5_e, updateinput5_e] = useState(0);
  const[input6_e, updateinput6_e] = useState(0);
  const[input7_e, updateinput7_e] = useState(0);
  const[input8_e, updateinput8_e] = useState(0);
  const[input9_e, updateinput9_e] = useState(0);
  const[total_e, updatetotal_e] = useState(0);
  const[total_left_e, updatetotal_left_e] = useState(100);

  const inputs_e = [input1_e,input2_e,input3_e,input4_e,input5_e,input6_e,input7_e,input8_e,input9_e, total_e,total_left_e]

  const updateinputs_e = [updateinput1_e,updateinput2_e,updateinput3_e,updateinput4_e,updateinput5_e,updateinput6_e,updateinput7_e,updateinput8_e,updateinput9_e, updatetotal_e,updatetotal_left_e]

  

  

  const[stage, setstage] = useState(1); 
  const[reset, resetInputs] = useState(false);
  const[isrestart, setIsrestart] = useState(true); 




  function cleanInputs(){
    updateinputs[0](0);
    updateinputs[1](0);
    updateinputs[2](0);
    updateinputs[3](0);
    updateinputs[4](0);
    updateinputs[5](0);
    updateinputs[6](0);
    updateinputs[7](0);
    updateinputs[8](0);
    updateinputs[9](100);
    updateinputs_e[0](0);
    updateinputs_e[1](0);
    updateinputs_e[2](0);
    updateinputs_e[3](0);
    updateinputs_e[4](0);
    updateinputs_e[5](0);
    updateinputs_e[6](0);
    updateinputs_e[7](0);
    updateinputs_e[8](0);
    updateinputs_e[9](0);
    updateinputs_e[10](100);
  }
  
  function percentage(){
    if(stage == 1){
      return 0;
    }
    else if(stage == 2){
      return 50;
    }
    return 100;
  }

  if(reset){
    console.log("Resetting");
    cleanInputs();
    resetInputs(false);
  }

    return (
        <div className="page_container">
          <Header/>
          <StepProgressBar id='step_bar' stage = {percentage()}/>
          <Result_title stage = {stage}/>
          <Revenues stage = {stage} reset={reset} nextstage={setstage} resetstage={resetInputs} inputs={inputs} updateinputs={updateinputs} isrestart = {isrestart}/>
          <Expenses stage = {stage} nextstage={setstage} setrestart = {setIsrestart} inputs={inputs_e} updateinputs={updateinputs_e} isrestart = {isrestart}/>
          <Result1 stage = {stage} nextstage={setstage} setrestart = {setIsrestart}/>
          <Result2 stage = {stage} nextstage={setstage} resetstage={resetInputs} setrestart = {setIsrestart}/>
          
        </div>
    )
}

export default App;