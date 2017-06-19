console.log('Bank');

var savWith = document.querySelector('#savWithdraw')
var savDep = document.querySelector('#savDeposit')
var cheWith = document.querySelector('#cheWithdraw')
var cheDep = document.querySelector('#cheDeposit')
var savAmount = document.querySelector('#savInput');
var cheAmount = document.querySelector('#cheInput');
var startBal = 0
var checkBal = startBal.toFixed(2)
var savinBal = startBal.toFixed(2)

document.getElementById("savBal").innerHTML = '$' + savinBal;
document.getElementById("cheBal").innerHTML = '$' + checkBal;

var withSav = function() {
  if (savinBal >= savAmount.value) {
    savinBal = parseFloat(savinBal) - parseFloat(savAmount.value);
    document.getElementById("savBal").innerHTML = '$' + savinBal.toFixed(2);
  } else {
    alert("You cannot withdraw more than the total amount!")
  }
}

var depSav = function() {
  savinBal = parseFloat(savinBal) + parseFloat(savAmount.value);
  document.getElementById("savBal").innerHTML = '$' + savinBal.toFixed(2);
}

var withChe = function() {
  if (savinBal >= cheAmount.value) {
    checkBal = parseFloat(checkBal) - parseFloat(cheAmount.value);
    document.getElementById("cheBal").innerHTML = '$' + checkBal.toFixed(2);
  } else {
    alert("You cannot withdraw more than the total amount!")
  }
}

var depChe = function() {
  checkBal = parseFloat(checkBal) + parseFloat(cheAmount.value);
  document.getElementById("cheBal").innerHTML = '$' + checkBal.toFixed(2);
}

savWith.addEventListener('click', withSav);
savDep.addEventListener('click', depSav);
cheWith.addEventListener('click', withChe);
cheDep.addEventListener('click', depChe);
