import React from "react";
import Option from './Option.jsx';
import PieChart from './PieChartClass.jsx'


function Result1(props){

  function onBack(){
    props.setrestart(false);
    props.nextstage(2);
  }

  if(props.stage == 3){

    const pieData = [ 
      { name: "Medical Center", value: 45, color: '#f0bf00'}, 
      { name: "Student Fees", value: 4,  color: '#f6e50e'}, 
      { name: "State of California", value: 8, color: '#fff688' }, 
      { name: "Tuition", value: 11, color: '#5f63e3' }, 
      { name: "Research Grants and Contracts", value: 13, color: '#71a8ff'  }, 
      { name: "Pell Grants", value: 1, color:"#58C9FB" }, 
      { name: "Non-educational Services", value: 11, color:"#0F7AB4" }, 
      { name: "Gifts, Endowments, Interest, Etc.", value: 7, color:"#D4E4FF" }];

    return(
      <div>
        <h4>Actual Revenue</h4>
          <div className="graph_container">
              <PieChart data={pieData} />
          </div>
          <div className="btn_1">
            <button className="btn" onClick={()=>props.nextstage(4)}>Next</button>
          </div>
          <div className="btn_2">
            <button className="btn_grey" onClick={()=>onBack()}>Back</button>
          </div>
      </div>
    )
  }
  return null;
}

export default Result1;
