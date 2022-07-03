
import React, { useState, useEffect, useRef } from 'react';
import Option from './Option.jsx';
import PieChart from './PieChartClass.jsx'

function Expenses(props){

  const show_total = useRef(null);
  const show_percentage = useRef(null);
  const[need_update, set_need_update] = useState(false);
  
  function update_handler(){
    set_need_update(true)
  }
  function cleanInputs(){
    
    props.updateinputs[0](0);
    props.updateinputs[1](0);
    props.updateinputs[2](0);
    props.updateinputs[3](0);
    props.updateinputs[4](0);
    props.updateinputs[5](0);
    props.updateinputs[6](0);
    props.updateinputs[7](0);
    props.updateinputs[8](0);
    props.updateinputs[9](0);
    props.updateinputs[10](100);
    
  }

  
  
  function add_sum(){
    let sum = +props.inputs[0] + +props.inputs[1] + +props.inputs[2] + +props.inputs[3] + +props.inputs[4] + +props.inputs[5] + +props.inputs[6] + +props.inputs[7] + +props.inputs[8];
    props.updateinputs[9](sum);
    props.updateinputs[10](100 - sum);
    set_need_update(false);
  }

  function onBack(){
    props.setrestart(false);
    props.nextstage(1);
  }

    useEffect(() => {
    if(props.inputs[9] != 0 && props.stage == 2){
      show_percentage.current.style.color = "white";
      show_total.current.style.color = "white";
    }
    if (need_update && props.stage == 2){
      show_percentage.current.style.color = "white";
      show_total.current.style.color = "white";
      add_sum();
    }
  });

  const pieData = [
      { name: 'Medical center',  value: parseInt(props.inputs[0]), color: '#f0bf00' },
      { name: "Teaching and Teaching Support", value: parseInt(props.inputs[1]), color: '#f6e50e'},
      { name: "Research", value: parseInt(props.inputs[2]), color: '#fff688'},
      { name: "Student Services and Financial Aid", value: parseInt(props.inputs[3]), color: '#5f63e3'},
      { name: "Operations and Maintenance", value: parseInt(props.inputs[4]), color: '#71a8ff'},
      { name: "Administration", value: parseInt(props.inputs[5]), color:"#58C9FB" },
      { name: "Services", value: parseInt(props.inputs[6]), color:"#0F7AB4" },
      { name: "Public Service", value: parseInt(props.inputs[7]), color:"#D4E4FF" },
      { name: "Depreciation, Interest, etc.", value: parseInt(props.inputs[8]), color:"#D4E4FF" }
  ];

  if(props.reset){
    console.log("Resetting");
    cleanInputs();
    props.resetstage(false);
  }
  if(props.stage == 2){
    return(
      <div>   
          <h4>UC Davis Expenses</h4>

          <div className="graph_container">
              <PieChart data={pieData} />
          </div>
          
          <div className="function_row">
            <span>Function</span>
            <span>Available: {props.inputs[10]} %</span>
          </div>
            <Option name="Medical center" color="#F0BF00" input_func={props.updateinputs[0]} onchange={update_handler} total={props.inputs[9]- +props.inputs[0]} input = {props.inputs[0]} isrestart = {props.isrestart}info = "The cost of providing care at the Medical Center is roughly what we get paid to provide it."/>

            <Option name="Teaching and Teaching Support" color="#F6E50E" input_func={props.updateinputs[1]} onchange={update_handler} total={props.inputs[9]- +props.inputs[1]} input = {props.inputs[1]} isrestart = {props.isrestart} info = "Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries."/>

            <Option name="Research" color="#FFF688" input_func={props.updateinputs[2]} onchange={update_handler} total={props.inputs[9]- +props.inputs[2]} input = {props.inputs[2]} isrestart = {props.isrestart} info = "The costs of doing the research, mostly researcher salaries."/>

            <Option name="Student Services and Financial Aid" color="#5F63EC" input_func={props.updateinputs[3]} onchange={update_handler} total={props.inputs[9]- +props.inputs[3]} input = {props.inputs[3]} isrestart = {props.isrestart}info = "Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%."/>

            <Option name="Operations and Maintenance" color="#71A8FF" input_func={props.updateinputs[4]} onchange={update_handler} total={props.inputs[9]- +props.inputs[4]} input = {props.inputs[4]} isrestart = {props.isrestart} info = "Upkeep of the grounds and building, and utilities, which are less than 1%."/>

            <Option name="Administration" color="#58C9FB" input_func={props.updateinputs[5]} onchange={update_handler} total={props.inputs[9]- +props.inputs[5]} input = {props.inputs[5]} isrestart = {props.isrestart} info = "Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets."/>

            <Option name="Services" color="#0F7AB4" input_func={props.updateinputs[6]} onchange={update_handler} total={props.inputs[9]- +props.inputs[6]} input = {props.inputs[6]} isrestart = {props.isrestart} info = "The costs of providing dorms, dining,parking, etc."/>

            <Option name="Public Service" color="#D4E4FF" input_func={props.updateinputs[7]} onchange={update_handler} total={props.inputs[9]- +props.inputs[7]} input = {props.inputs[7]} isrestart = {props.isrestart} info = "Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university."/>

            <Option name="Depreciation, Interest, etc." color="#FFF" input_func={props.updateinputs[8]} onchange={update_handler} total={props.inputs[9]- +props.inputs[8]} input = {props.inputs[8]} isrestart = {props.isrestart} info = "Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses."/>

           <div className='total_row'>
            <span id="total_text">Total</span>
            <div className="option_input">
              <span id="total_input" ref={show_total}>{props.inputs[9]}</span>
              <span className="percentages"ref={show_percentage}>%</span>
            </div>
          </div>
          <div className="btn_1">
            <button className="btn" onClick={()=>props.nextstage(3)}>Next</button>
          </div>
          <div className="btn_2">
            <button className="btn_grey" onClick={onBack}>Back</button>
          </div>
        
      </div>
    )
    
  }
  else if(props.stage ==4){
    return(
      <div className="graph_container">
         <PieChart data={pieData} />  
      </div>
    )
  }
  return null;

}

export default Expenses;





// import React from "react";

// function Expenses(props){

//   function onBack(){
  
//     props.setrestart(false);
//     props.nextstage(1);
//   }

//   if(props.stage == 2){
//     return(
//       <div>
//         <h4>UC Davis Expenditures</h4>
//           <div className="btn_1">
//             <button className="btn" onClick={()=>props.nextstage(3)}>Next</button>
//           </div>
//           <div className="btn_2">
//             <button className="btn_grey" onClick={onBack}>Back</button>
//           </div>
//       </div>
//     )
//   }
//   return null;
// }

// export default Expenses;