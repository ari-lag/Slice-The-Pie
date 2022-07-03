import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step, Transition } from "react-step-progress-bar";

class StepProgressBar extends React.Component {

  render() {
    return (
     <div className="Progressbar">
        <ProgressBar
        percent={this.props.stage}
        filledBackground="linear-gradient(to right, #71A8FF, #71A8FF)"
        height = "3px">
      
      <Step>
        {({ accomplished, transitionState}) => (
          <div
            style={transitionStyles[transitionState]}
            className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
            <p className='steps'>REVENUES</p>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, transitionState}) => (
          <div
            style={transitionStyles[transitionState]}
            className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
            <p className='steps'>EXPENSES</p>
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, transitionState}) => (
          <div
            style={transitionStyles[transitionState]}
            className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
            <p className='steps'>COMPARE</p>
          </div>
        )}
      </Step>
      </ProgressBar>
     </div>
    );
  }
}


const transitionStyles = {
  entering: { transform: "scale(1.3)" },
  entered: { transform: "scale(1)" },
  exiting: { transform: "scale(1)" },
  exited: { transform: "scale(1)" }
}

export default StepProgressBar;