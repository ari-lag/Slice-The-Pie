import React, { useState, useRef } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { Icon, InlineIcon } from '@iconify/react';
import infoCircleFilled from '@iconify/icons-ant-design/info-circle-filled';


function Option(props) {
  const show_percentage = useRef(null);


  function update_input(val) {
    show_percentage.current.style.color = "white";
    if(val.target.value <0){
      val.target.value = 0;
    }
    else if(+props.total + +val.target.value > 100){
      val.target.value = 100 - +props.total;
    }
    props.input_func(val.target.value);
    props.onchange();
  }

  if(props.isrestart == false && props.input != 0){
    return (
      <div className="one_option">

        <div className="option_info">
        <span style={{backgroundColor:props.color}} className = "option_dot"></span>
     
         <span className="option_name">
         {props.name+ " "}
          <Popup content={props.info} on='click' className = "popup" pinned position='bottom center'
          trigger={ <Icon id="option_info_icon" icon={infoCircleFilled} style={{color: 'white', fontSize:"11px"}}/>}/>
          </span>
       
      </div>
        <div className="option_input">
          <input className="option_userinput" type="number" placeholder="0" onChange={update_input} defaultValue={props.input}></input>
          <span className="percentages" style={{color:"white"}}>%</span>
        </div>
      </div>
    )
  }
  return (
    <div className="one_option">
      <div className="option_info">
        <span style={{backgroundColor:props.color}} className = "option_dot"></span>
     
         <span className="option_name">
         {props.name+ " "}
          <Popup content={props.info} on='click' className = "popup" pinned position='bottom center'
          trigger={ <Icon id="option_info_icon" icon={infoCircleFilled} style={{color: 'white', fontSize:"11px"}}/>}/>
          </span>
       
      </div>
      <div className="option_input">
        <input className="option_userinput" type="number" placeholder="0" onChange={update_input}></input>
        <span className="percentages" ref={show_percentage}>%</span>
      </div>
    </div>
  )
}

export default Option;