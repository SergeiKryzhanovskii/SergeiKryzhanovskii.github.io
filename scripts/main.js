var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/bad_robot.jpg') {
      myImage.setAttribute ('src','image/bad_robot_2.jpg');
    } else {
      myImage.setAttribute ('src','image/bad_robot.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ', bad robots are cool, isn\'t?';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ', bad robots are cool, isn\'t?';
}
myButton.onclick = function() {
  setUserName();
}