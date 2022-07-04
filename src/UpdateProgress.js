'use strict';

let nextButton = document.getElementById('next-button');
nextButton.addEventListener("click", next_click);

let circles = document.getElementsByClassName("progressCircle");
let circle1 = circles[0].style.backgroundColor = "#71A8FF";

let progressText = document.getElementsByClassName("progressText");
let text1 = progressText[0].style.color = "#71A8FF";

let previousButton = document.getElementById('previous-button');
previousButton.addEventListener("click", previous_click);

let compareButton = document.getElementById('compare-button')
compareButton.addEventListener("click", compare_click)

let lastNext = document.getElementById('last_next-button')
lastNext.addEventListener("click", lastNext_click)

let restartButton = document.getElementById("restart-button")
restartButton.addEventListener("click", restart_click)

let lines = document.getElementsByClassName('progressLine');

function next_click(){
  lines[0].style.border = "2px solid #71A8FF";
  circles[1].style.backgroundColor = "#71A8FF";
  progressText[1].style.color = "#71A8FF";

  document.getElementById("revenueChunk").style.display = "none";
  document.getElementById("revenue").style.display = "none";
  document.getElementById('expenditureChunk').style.display = "block";
  document.getElementById('expenditure').style.display = "block";

}

function previous_click(){
  lines[0].style.border = "2px solid #7F8187";
  circles[1].style.backgroundColor = "#7F8187";
  progressText[1].style.color = "white";



  document.getElementById("revenueChunk").style.display = "block";
  document.getElementById("revenue").style.display = "block";
  document.getElementById('expenditureChunk').style.display = "none";
  document.getElementById('expenditure').style.display = "none";

  
}


function compare_click(){
 lines[1].style.border = "2px solid #71A8FF";
 circles[2].style.backgroundColor = "#71A8FF";
 progressText[2].style.color = "#71A8FF";
 document.getElementById("expenditureChunk").style.display = "none";
 document.getElementById("expenditure").style.display = "none";
 document.getElementById("result_title").style.display = "block";
 
 
 
 document.getElementById("rev_compare").style.display="block";
}

function lastNext_click(){

 document.getElementById("rev_compare").style.display= "none"
 document.getElementById("expense_compare").style.display= "block"





}

function restart_click(){
lines[0].style.border = "2px solid #7F8187";
circles[1].style.backgroundColor = "#7F8187";
progressText[1].style.color = "white";
lines[1].style.border = "2px solid #7F8187";
circles[2].style.backgroundColor = "#7F8187";
progressText[2].style.color = "white";



document.getElementById("expense_compare").style.display= "none";
document.getElementById("result_title").style.display = "none";
document.getElementById("revenueChunk").style.display = "block";
document.getElementById("revenue").style.display = "block";
document.getElementById('totalR').value = '';
document.getElementById('totalE').value = '';
  
}