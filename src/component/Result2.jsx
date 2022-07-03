import React from "react";
import Option from './Option.jsx';
import PieChart from './PieChartClass.jsx';
function Result2(props){

  if(props.stage == 4){


  function onRestart(){
    props.resetstage(true)
    props.setrestart(true);
    props.nextstage(1);
  }


      const pieData = [ 
      { name: "Medical Center", value: 43, color: '#f0bf00'}, 
      { name: "Teaching and Teaching Support", value: 23, color: '#f6e50e'}, 
      { name: "Research", value: 11, color: '#fff688' }, 
      { name: "Student Services and Financial Aid", value: 8, color: '#5f63e3' }, 
      { name: "Operations and Maintenance", value: 2, color: '#71a8ff'  }, 
      { name: "Administration", value: 3, color:"#58C9FB" }, 
      { name: "Services", value: 2, color:"#0F7AB4" }, 
      { name: "Public Service", value: 2, color:"#D4E4FF" },
      { name: "Depreciation, Interest, etc.", value: 6, color:"#fff" }];
    return(
      <div>
        <h4>Actual Expenses</h4>
          <div className="graph_container">
              <PieChart data={pieData} />
          </div>
          <div className="btn_1">
            <button className="btn" onClick={onRestart}>Restart</button>
          </div>
          <div className="btn_2">
            <button className="btn_grey" onClick={()=>props.nextstage(3)}>Back</button>
          </div>
      </div>
    )
  }
  return null;
}

export default Result2;