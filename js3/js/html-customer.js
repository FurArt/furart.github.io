var mSecond = 1;
var ms = 0;
var timeStart;
var timeОne;
// console.log(timeОne.getTime());
function timer() {
  timeОne  = new Date()
  ms = ( timeОne.getTime() - timeStart.getTime())
};
// timer()
console.log(timeОne);
function saveTime() {
  timeStart = new Date;
  timeInterveal();
};
function timeInterveal(){
  var programTimer = setInterval(timer, 1);
  return programTimer;
};
var searchClocl = document.querySelector('.clock');
console.log(searchClocl);
function displayTime() {
  searchClocl.innerHTML = ms;
}
setInterval(displayTime, 10);

var searchStart = document.querySelector('.start');
searchStart.addEventListener('click', saveTime);
