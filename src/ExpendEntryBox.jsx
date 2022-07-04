import React, {useState} from 'react';
import './App.css';

let adderArray = [
{ name: "Medical Center", value: 0, index: 8},
{ name: "Teaching and Teaching Support", value: 0, index: 9},
{ name: "Research", value: 0, index: 10},
{ name: "Student Services and Financial Aid", value: 0, index: 11},
{ name: "Depreciation, Interest, etc.", value: 0, index: 12},
{ name: "Operations and Maintenance (Buildings, etc)", value: 0, index: 13},
{ name: "Administration.", value: 0, index: 14},
{ name: "Non-Educational Services", value: 0, index: 15},
{ name: "Public Service", value: 0, index: 16},
{ name: "Other", value: 0, index: 17}];

let n = -1; 
let sum = 0; 
let prevSum = 0;
let newVal = 0;

function Expenditure(props) {

  const onChildType = props.onChildType;

  let expenditureData = [ 
      { name: "Medical Center", value: 43, color: '#F0BF00', text: 'The cost of providing care at the Medical Center is roughly what we get paid to provide it.' }, 
      { name: "Teaching and Teaching Support", value: 23, color: '#F6E50E', text: 'Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.' }, 
      { name: "Research", value: 11, color: '#FFF688', text: 'The costs of doing the research, mostly researcher salaries.' }, 
      { name: "Student Services and Financial Aid", value: 8, color: '#5F63EC', text: 'Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%.' }, 
      { name: "Depreciation, Interest, etc.", value: 6, color: '#71A8FF', text: 'Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses.' },
      { name: "Operations and Maintenance (Buildings, etc)", value: 2,color: '#58c9fb', text: 'Upkeep of the grounds and building, and utilities, which are less than 1%.' }, 
      { name: "Administration", value: 3, color: '#0F7A8B', text: "Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets." }, 
      { name: "Non-Educational Services", value: 2, color: '#E3A400', text: 'The costs of providing dorms, dining,parking, etc.' }, 
      { name: "Public Service", value: 2, color: '#FFFFFF', text: 'Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university.' },
      { name: "Other", value: 0, color: '#D4E4FF', text: ''}
      
    ];

  function onChange(event) {
    if (event.target.value === '') {
      console.log({name: event.target.name, value: 0});
      onChildType(event.target.name, 0, "exp");
       for (let i = 0; i < adderArray.length; i++ ){
         if (adderArray[i].name == event.target.name){ 
           n= i; 
         }
       }
      adderArray[n].value = 0;
      addUp(adderArray, n);
    }
    else {
      console.log({name: event.target.name, value: parseInt(event.target.value)});
      let total = document.getElementById("totalE").value;
      console.log('total:', total)
      if (total != 100){
        onChildType(event.target.name, parseInt(event.target.value), "exp");
        
        //  for (let i = 0; i < adderArray.length; i++){   
        //    if (adderArray[i].name == event.target.name){   
        //     adderArray[i].value = event.target.value;
        //     n = i;
        //  }
        // }  

      }
 
        
      for (let i = 0; i < adderArray.length; i++){   
        if (adderArray[i].name == event.target.name){   
          adderArray[i].value = event.target.value;
          n = i;
        }
      }  
        
    //  if(event.target.value.length == 1 && event.target.value == 0){
    //    let zeroEnter = document.getElementsByClassName("percentage");
    //for (let i = 0; i < adderArray.length; i++ ){
    
      // n = -1;
      console.log("adderArray: ", adderArray);
      addUp(adderArray, n);

    }
  }


    function addUp(array){
      sum = 0;
      console.log("ARRAY LENGTH: ", array.length);

     for (let i = 0; i < array.length; i++ ){
        console.log(array[i].value);
        sum +=  parseInt(array[i].value);
     }

      let totalLine = document.getElementById("totalE");
      totalLine.value = sum; 
      console.log('SUM: ', sum)
      if (sum > 100){
        sum = 0;
        console.log('Fail')
        return false 

      } 
      else {
        sum = 0;
        return true 
      }
    }

  function changeInfo(name) {
    //console.log("rev data i",expenditureData[0].text);
    //console.log(expenditureData[0].name);
    for (let i=0; i<expenditureData.length; i++) {
      //console.log("***(*(****(*((**(*(*(*(",{name}.name, expenditureData[i]);
      if (expenditureData[i].name == {name}.name) {
        //console.log("***************************", {name}.name);
        return expenditureData[i].text;
      }
    }
  }

  function changeColor (name) {
    for (let i=0; i<expenditureData.length; i++) {
      if (expenditureData[i].name == {name}.name) {
        return expenditureData[i].color;
      }
    }
    
  }

  function addUp(array, lastElement){
    sum = 0;
    
    console.log("ARRAY LENGTH: ", array.length);
    console.log("adderArray in addUp: ", array);

     for (let i = 0; i < array.length; i++ ){
        console.log(array[i].value);
        sum +=  parseInt(array[i].value);
     }

    let totalLine = document.getElementById("totalE");
    
    console.log('SUM: ', sum)
    let inputChange = document.getElementsByClassName("percentage");
    if (sum > 100){
      totalLine.value = 100;
      console.log('HERE', inputChange[array[lastElement].index].value )
      if (inputChange[array[lastElement].index].value.length > 1){
        newVal = (100 - prevSum) +  parseInt(inputChange[array[lastElement].index].value[0])}
      else { 
        newVal = (100 - prevSum)
      }
      if (newVal <= 0){
        inputChange[array[lastElement].index].value = ''
        onChildType(array[lastElement].name, 0, "exp");
      } 
      else{
        console.log('HERLP')
        inputChange[array[lastElement].index].value = newVal
        onChildType(array[lastElement].name, newVal, "exp");
      }
      prevSum = sum;
      sum = 0;
      n=0;
      console.log('Fail')
      return false 

    }
    // if (sum == 100){
    //    inputChange[array[lastElement].index].value = '';
      
    // }

    else {
      if (sum == 0){
         totalLine.value = ''; 
      }
      else{
        totalLine.value = sum; 
      }
      prevSum = sum;
      sum = 0;
      return true 
    }

   
  }


  return (
    <div className="name">
      <div className="circle" style={{backgroundColor: changeColor(props.name)}}> </div>
      {props.name}

      <div class="tooltip"> 
        <div class = "iCircle">.i</div>
        <span class="tooltiptext">{changeInfo(props.name)}</span>
      </div>

      
      <input 
        type="numeric" 
        className="percentage"
        name={props.name} 
        placeholder="0%" 
        onChange={onChange}
      />
      
    </div>
  )
}

export default Expenditure;
