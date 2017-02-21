var ms = 1;
var a = 1;
var s = 1;
var m = 1;
function time(){
  var someTime = new Date();
  ms = someTime.getTime();
  a = ms % 1000;
  var b = ms / 1000;
  s = Math.floor(b % 60);
  var c = b / 60;
  m = Math.floor(c % 60);
};
// time();
document

setTimeout(function () {

}, 10);
console.log(ms)
console.log(a)
console.log(s)
console.log(m)


// html

var head =   {
    bootstrap: function (){
      document.createElement('link');
      this.href = 'css/bootstrap.css';
      this.rel = 'stylesheet';
    },
    bootstrapTheme: function creatTagElement() {
      var tagElement = document.createElement('link');
      tagElement.setAttribute ( 'href', 'css/bootstrap-theme.css' );
      tagElement.setAttribute ( 'rel', 'stylesheet' );
      return tagElement;
    },
    customer: function creatTagElement() {
      var tagElement = document.createElement('link');
      tagElement.setAttribute ( 'href', 'css/customer.css' );
      tagElement.setAttribute ( 'rel', 'stylesheet' );
      return tagElement;
    },
  };

  var headHtml = document.getElementsByTagName('head');
  console.log(headHtml);
  headHtml.appendChild(header.bootstrapTheme());
