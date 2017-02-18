var mSecond = 1;
function timer() {
  for (var i = 0; i > 0; i++) {
    mSecond++;
  }
  console.log(mSecond);
};

var programTimer = setInterval(timer, 1);
console.log(programTimer);

function displayTime(){
  var a = mSecond % 10;
  console.log(a);
};
displayTime();
