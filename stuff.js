var moveInterval;
//THIS IS FOR MOVING RIGHT
const distance = 30;
function startMovingRight() {
  moveInterval = setInterval(moverRight, 50);
}
function stopMovingRight() {
  clearInterval(moveInterval);
}
function moverRight() {
  let box = document.getElementById("box");

   var currentMargin = parseInt(box.style.left) || 0;
  currentMargin += distance;
  if(currentMargin< 1850)box.style.left = currentMargin + "px";
  if (currentMargin === 0 && currentMarginTop === 0) {
    doorInfo.style.display = "block";
  } else {
    doorInfo.style.display = "none";
  }
}

//THIS IS FOR MOVING LEFT
function startMovingLeft() {
  moveInterval = setInterval(moverLeft, 50);
}
function stopMovingLeft() {
  clearInterval(moveInterval);
}
function moverLeft() {
  let box = document.getElementById("box");

  var currentMargin = parseInt(box.style.left) || 0;
  currentMargin -= distance;
  if(currentMargin > 0)box.style.left = currentMargin + "px";
  if (currentMargin === 0 && currentMarginTop === 0) {
    doorInfo.style.display = "block";
  } else {
    doorInfo.style.display = "none";
  }
}

//THIS IS FOR MOVING DOWN
function startMovingDown() {
  moveInterval = setInterval(moverDown, 50);
}
function stopMovingDown() {
  clearInterval(moveInterval);
}
function moverDown() {
  let box = document.getElementById("box");

  var currentMarginTop = parseInt(box.style.top) || 0;
  currentMarginTop += distance;
  if(currentMarginTop <= 570)box.style.top = currentMarginTop + "px";
  if (currentMargin === 0 && currentMarginTop === 0) {
    doorInfo.style.display = "block";
  } else {
    doorInfo.style.display = "none";
  }
}

//THIS IS FOR MOVING UP
function startMovingUp() {
  moveInterval = setInterval(moverUp, 50);
}
function stopMovingUp() {
  clearInterval(moveInterval);
}
function moverUp() {
  let box = document.getElementById("box");

  var currentMarginTop = parseInt(box.style.top) || 0;
  currentMarginTop -= distance;
  if(currentMarginTop > 0)box.style.top = currentMarginTop + "px";
  if (currentMargin === 0 && currentMarginTop === 0) {
    doorInfo.style.display = "block";
  } else {
    doorInfo.style.display = "none";
  }
}

function info(){
  alert("This is your character.");
}

var doorInfo;
function doorInfoAppear() {
  let box = document.getElementById("box");
  var doorInfo = document.getElementById("info-door");
  if (parseInt(box.style.left) >1800 && parseInt(box.style.top) > 350) {
    doorInfo.style.display = "block";
  }
  if(parseInt(box.style.left) < 1800 || parseInt(box.style.top) > 420){
    doorInfo.style.display = "none";
  }
}

setInterval(doorInfoAppear, 250);



