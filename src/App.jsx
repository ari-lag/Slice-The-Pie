
import React, { useRef, useEffect, useState } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import './App.css';
import Revenue from './RevenueEntryBox.jsx';
import Expenditure from './ExpendEntryBox.jsx';
//import './UpdateProgress.js';
//<script defer type="module" src="./UpdateProgress.js"></script>

/* App */
function App() {
  
    let revenueData = [ 
      { name: "Medical Center", value: 45, color: '#F0BF00' },
      { name: "State of California", value: 8, color: '#F6E50E' }, 
      { name: "Tuition", value: 11, color: '#FFF688' }, 
      { name: "Student Fees", value: 4, color: '#5F63EC' }, 
      { name: "Grants and Contracts", value: 14, color: '#71A8FF' }, 
      { name: "Non-educational Services", value: 11,color: '#58c9fb' }, 
      { name: "Gifts, Endowments, Interest, Etc.", value: 7, color: '#0F7A8B' }, 
      { name: "Other", value: 0, color: '#D4E4FF'} 
    ];

    let expenditureData = [ 
      { name: "Medical Center", value: 43, color: '#F0BF00' }, 
      { name: "Teaching and Teaching Support", value: 23, color: '#F6E50E' }, 
      { name: "Research", value: 11, color: '#FFF688' }, 
      { name: "Student Services and Financial Aid", value: 8, color: '#5F63EC' }, 
      { name: "Depreciation, Interest, etc.", value: 6, color: '#71A8FF' },
      { name: "Operations and Maintenance (Buildings, etc)", value: 2,color: '#58c9fb' }, 
      { name: "Administration", value: 3, color: '#0F7A8B' }, 
      { name: "Non-Educational Services", value: 2, color: '#E3A400' }, 
      { name: "Public Service", value: 2, color: '#FFFFFF' },
      { name: "Other", value: 0, color: '#D4E4FF'}
      
    ];

    let userRevenueData = [];
    let userExpenditureData = [];


    const [pieData1, setPieData1] = useState(userRevenueData);
    const [pieData2, setPieData2] = useState(userExpenditureData);

    /** Creates object with input name and value
     * Then pushs into array. Removes any copies.
     */
    function handleChildType(newName, newValue, dataset) {
      if (dataset == "rev"){
        console.log("in rev for handleChildType");
          let item = createObject(newName, newValue, dataset);

          for (let i=0; i<pieData1.length; i++) {

            if (pieData1[i].name == newName) {
              console.log("theres a match for the name");
              removeItem(i, dataset);
              addItem(item, dataset);
              break;
            }
            if (i == pieData1.length-1) {
              addItem(item,dataset);
            }
          }
      }
      else if (dataset == "exp"){
          let item = createObject(newName, newValue, dataset);
          for (let i=0; i<pieData2.length; i++) {
            if (pieData2[i].name == newName) {
              removeItem(i, dataset);
              addItem(item, dataset);
              break;
            }
            if (i == pieData2.length-1) {
              addItem(item,dataset);
            }
          }
      }
    }

    /** Creates the new object */
    function createObject(name, value, dataset) {
      if (dataset == "rev"){
          console.log("creating a new object");
          for (let i=0; i<revenueData.length; i++) {
            if (revenueData[i].name == name) {
              return {name: name, value: value, color: revenueData[i].color};
            }
          }
      }
      else if (dataset == "exp"){
          console.log("creating a new object");
          for (let i=0; i<expenditureData.length; i++) {
            if (expenditureData[i].name == name) {
              return {name: name, value: value, color: expenditureData[i].color};
            }
          }
      }
    
    }

    /** Removes old name item  */
    function removeItem(index, dataset) {

      if (dataset == "rev"){
        let value = pieData1.splice(index, 1);
        setPieData1(pieData1);
      }
      else if (dataset == "exp"){
        let value = pieData2.splice(index, 1);
        setPieData2(pieData2);
      }
           
    }

    /** Add new name item */
    function addItem(value, dataset) {
      console.log("additem dataset: ", dataset);
      if (dataset == "rev"){
        console.log("in rev for adding item");
              //Delete old empty
          for (let x = 0; x < pieData1.length; x++){
            if (pieData1[x].name == "$empty"){
              let emptyVal = pieData1[x].value;
              removeItem(x, dataset);}
          }
          let newPie = [...pieData1];
          newPie.push(value);  
          setPieData1(newPie);
          console.log("data in event listener is still the old value", pieData1);
      }
      else if (dataset == "exp"){
              //Delete old empty
          for (let x = 0; x < pieData2.length; x++){
            if (pieData2[x].name == "$empty"){
              let emptyVal = pieData2[x].value;
              removeItem(x,dataset);}
          }
          let newPie = [...pieData2];
          newPie.push(value);    
          setPieData2(newPie);
          console.log("data in event listener is still the old value", pieData2);
      }
    }

    function restart(){
      console.log("you clicked restart");
      console.log("piedata1 before restart: ", pieData1);
      console.log("piedata2 before restart: ", pieData2);

      let inputBox = document.getElementsByClassName("percentage");

      for (let i = 0; i < 18; i++){
         inputBox[i].value = '';
      }

      let pie1length = pieData1.length;
      let pie2length = pieData2.length;

      for (let i = 0; i < pie1length; i++){
        removeItem(0,"rev")
      }

      for (let i = 0; i < pie2length; i++){
        removeItem(0,"exp");
      }

      console.log("piedata1 after restart: ", pieData1);
      console.log("piedata2 after restart: ", pieData2);
      let newPie1 = [...pieData1];
      let newPie2 = [...pieData2];
      setPieData1(newPie1);
      setPieData2(newPie2);

      

     


    }
    
    console.log("rendering App");

    return (
      <div id="Body">
          <h1>Slice the Pie</h1>

          <div id="intro">

            <div className="introText"> 
            Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.
            </div>

            <div className="introText"> You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the real Provost made.</div>
          </div>


          <div id = "progressTextElements">
            <p className = "progressText">REVENUES</p>
            <p className = "progressText">EXPENSES</p>
            <p className = "progressText">COMPARE</p>
          </div>


        <div id = "progressContainer">
          <div id = "progressElements">
            <div className = "progressCircle"></div>
            <hr className="progressLine"></hr>
            <div className = "progressCircle"></div>
            <hr className="progressLine"></hr>
            <div className = "progressCircle"></div>
          </div>
        </div>


        <div className="category">
          <p id="revenue"> UC Davis Revenues</p>
          <p id="expenditure"> UC Davis Expenditures</p>
          <p id = "result_title"> RESULTS</p>
        </div>

     
        
         <div id="revenueChunk">

        <div class = "pieCharts" id = "revenuebarChart">
          <MyD3Component name ={"pie1"} data = {pieData1}/>    
        </div>
      

          <div id="column">
            <p>Function</p>
            <p>Percentage(%)</p>
          </div>

          <div id="legend">
            {["Medical Center", "State of California", "Tuition", "Student Fees", "Grants and Contracts", "Non-educational Services", "Gifts, Endowments, Interest, Etc.", "Other"].map((name) => (<Revenue name={name} onChildType={handleChildType}  />
            ))}
          </div>
        
        
          <label id="totalLabel">
            Total %
            <input type="text" inputMode="numeric" placeholder="0%" id="totalR"/>
          </label>

        
          <div class ="buttons">
            <button type="button" id="next-button" className="form-button">Next</button>
          </div>

        </div>


        <div id="expenditureChunk">

       <div class = "pieCharts" id= "expenditurebarChart">
          <MyD3Component name ={"pie2"} data = {pieData2}/>    
        </div>

          <div id="column">
            <p>Function</p>
            <p>Percentage(%)</p>
          </div>
        
          <div id="legend">
            {["Medical Center", "Teaching and Teaching Support", "Research", "Student Services and Financial Aid",  "Depreciation, Interest, etc.", "Operations and Maintenance (Buildings, etc)", "Administration", "Non-Educational Services", "Public Service", "Other"].map((name) => (<Expenditure name={name} onChildType={handleChildType} />
            ))}
          </div>
        
        
          <label id="totalLabel">
            Total %
            <input type="text" inputMode="numeric" placeholder="0%" id="totalE"/>
          </label>

          <div class ="buttons">
            <button type="button" id="compare-button" className="form-button">Compare</button>
            <button type="button" id="previous-button" className="form-button">Previous</button>
          </div>


        </div>

       
       <div id = "rev_compare">
       
          <p class = "pieLabels" id = "guess1">Your Revenue Guess</p>
          <div class = "pieCharts" id = "guessDisplay1">
            <MyD3Component name = {"revenueGuess"} data = {pieData1}/>   
          </div>
       
         <p class = "pieLabels" id = "actual1">Actual Revenue</p>
          <div class = "pieCharts" id = "realDisplay1">
            <MyD3Component name = {"revenueActual"} data = {revenueData}/>   
          </div>
       
          <div class ="buttons">
            <button type="button" id="last_next-button" className="form-button">Next</button>
          </div>


       </div>

          <div id = "expense_compare">
       
          <p class = "pieLabels" id = "guess2">Your Expenses Guess</p>
          <div class = "pieCharts" id = "guessDisplay2">
            <MyD3Component name = {"expenGuess"} data = {pieData2}/>   
          </div>
       
         <p class = "pieLabels" id = "actual2">Actual Expenses</p>
          <div class = "pieCharts" id = "realDisplay2">
            <MyD3Component name = {"expenActual"} data = {expenditureData}/>   
          </div>
       
          <div class ="buttons">
            <button onClick = {restart} type="button" id="restart-button" className="form-button">Restart</button>
          </div>


       </div>
       
      </div>
    )
}

export default App;