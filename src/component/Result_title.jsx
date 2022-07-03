import React from "react";

function Result_title(props){
  if(props.stage ==3){
    return(
        <div>
        <h2>RESULTS</h2>
        <h4>Your Revenue Guess</h4>
        </div>

    )
  }
  else if(props.stage == 4){
    return(
        <div>
        <h2>RESULTS</h2>
        <h4>Your Expenses Guess</h4>
        </div>
    )
  }
  return null;

}

export default Result_title;