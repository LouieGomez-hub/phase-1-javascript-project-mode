'use strict';
const lightSwitch = document.querySelector('.btn2');

lightSwitch.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

var activeBtn = null; 

function showAndHide(btnId, text) {
  var x = document.getElementById("myDIV");
  if (activeBtn === btnId) {
    x.innerHTML = text;
    activeBtn = null
  } else {
    x.innerHTML = text;
      activeBtn = btnId;
  } 
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}