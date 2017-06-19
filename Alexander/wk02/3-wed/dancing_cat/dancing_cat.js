var catImg = document.querySelector('img');
var start = document.querySelector('#start');
var fast = document.querySelector('#fast');
var stop = document.querySelector('#stop');
var party = document.querySelector('#party');
var movePixels;
var intervalId;

var catWalk = function() {
  var currentLeft = parseInt(catImg.style.left)
  catImg.style.left = (currentLeft + movePixels) + 'px'
    ;

  if (currentLeft > (window.innerWidth-catImg.width)) {
    catImg.style.left = '0px';
  }
}

var letsGo = function() {
  clearInterval(intervalId);
  movePixels = 20;
  intervalId = setInterval(catWalk, 400);
}

var goFast = function() {
  clearInterval(intervalId);
  movePixels= 30;
  intervalId = setInterval(catWalk, 200)
}

var finish = function() {
  clearInterval(intervalId);
}

var letsParty = function() {
  document.getElementById('music').play();
  clearInterval(intervalId);
  movePixels= 35;
  intervalId = setInterval(catWalk, 150)
}

start.addEventListener('click', letsGo);
fast.addEventListener('click', goFast);
stop.addEventListener('click', finish);
party.addEventListener('click', letsParty);
