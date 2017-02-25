var mSecond = 1;
var ms = 0;
var timeStart;
var timeОne;
var pause = 0;
var msp = 0;
var showTime;
// action
var searchClocl = document.querySelector('.clock');
var searchMs = document.querySelector('.right');
var searchStart = document.querySelector('#start-pause');
searchStart.addEventListener('click', saveTime);
var searchStop = document.querySelector('.stop');
searchStop.addEventListener('click', stopTime);

// FUN
//start
function saveTime() {
  if (pause == 0 ) {
    timeStart = new Date;
    timeInterveal();
    pause = 1;
    addPauseButton();
    startDispkayTime();
      } else {
    clearInterval(programTimer);
    clearInterval(showTime);
    msp = ms;
    pause = 0;
    addStartButton();
  }
};
function timeInterveal(){
  programTimer = setInterval(timer, 1);
};
function timer() {
    timeОne  = new Date()
    ms = msp + ( timeОne.getTime() - timeStart.getTime())
};
//stop
function stopTime() {
  clearInterval(programTimer);
  clearInterval(showTime);
  var ms = '00:00';
  searchClocl.innerHTML = ms;
  searchMs.innerHTML = '000';
  pause = 0;
  addStartButton();
}
// html add tag:
var calculeteTime = {
  mlsecond: function() {
    var a = ms % 1000;
    if (a >= 0 && a<=9) {
      a = '00'+ a;
    } else if (a >= 10 && a <= 99) {
      a ='0'+ a;
    }
    return a;
  },
  second: function () {
    var s = Math.floor((ms/1000)%60);
    return s;
  },
  minutes: function () {
    var m = Math.floor((ms/60000)%60);
        return m;
  },
};
function displayTimeWith0() {
  var m, s, mm;
  if ((calculeteTime.second() >= 0)&&(calculeteTime.second() <= 9)) {
    s ='0'+(calculeteTime.second());
  } else {
    s = calculeteTime.second();
  };
  if ((calculeteTime.minutes() >= 0)&&(calculeteTime.minutes() <= 9)) {
    m = '0'+(calculeteTime.minutes());
  }else {
    m = calculeteTime.minutes();
  };

return m+':'+s;
};


function addPauseButton() {
  searchStart.classList.remove ('start');
  searchStart.classList.add ('pause');
  searchStart.innerHTML = 'Пауза'
};
function addStartButton() {
  searchStart.classList.remove ('pause');
  searchStart.classList.add ('start');
  searchStart.innerHTML = 'Старт'
};


// вывод значения в документ
function displayTime() {
    searchClocl.innerHTML = displayTimeWith0();
    searchMs.innerHTML = calculeteTime.mlsecond();
}
function startDispkayTime() {
  showTime = setInterval(displayTime, 10);
}
