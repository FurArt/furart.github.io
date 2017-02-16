console.log(document);
// add object, create tag in html
//add css link in head
var cssClassFile = {
  bootstrap: function creatTagElement() {
    var tagElement = document.createElement('link');
    tagElement.setAttribute ( 'href', 'css/bootstrap.css' );
    tagElement.setAttribute ( 'rel', 'stylesheet' );
    return tagElement;
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
var bodyTag = {
  divContainerFluid: function creatTagElement() {
    var tagElement = document.createElement('div');
    tagElement.setAttribute ( 'class', 'container-fluid' );
    return tagElement;
  },
  divRow: function creatTagElement() {
    var tagElement = document.createElement('div');
    tagElement.setAttribute ( 'class', 'row' );
    return tagElement;
  },
  divCheckbox: function creatTagElement() {
    var tagElement = document.createElement('div');
    tagElement.setAttribute ( 'class', 'checkbox' );
    return tagElement;
  },
  h1TextCenter: function creatTagElement() {
    var tagElement = document.createElement('h1');
    tagElement.setAttribute ( 'class', 'text-center' );
    tagElement.innerHTML = 'Тест по программированию'
    return tagElement;
  },
  h3: function creatTagElement(a) {
    var tagElement = document.createElement('h3');
    var a;
    tagElement.innerHTML = a+'. Вопрос №'+a;
    return tagElement;
  },
  form: function creatTagElement() {
    var tagElement = document.createElement('form');
    tagElement.setAttribute ( 'class', 'center-block form-horizontal' );
    tagElement.setAttribute ( 'action', 'index.html' );
    tagElement.setAttribute ( 'method', 'post' );
    return tagElement;
  },
  label: function creatTagElement() {
    var tagElement = document.createElement('label');
    tagElement.setAttribute ( 'class', 'checkbox' );
    return tagElement;
  },
  inputCheckbox: function creatTagElement() {
    var tagElement = document.createElement('input');
    tagElement.setAttribute ( 'type', 'checkbox' );
    // tagElement.innerHTML = ('\"Вариант ответа №' + a + '\"');
    return tagElement;
  },
  inputButton: function creatTagElement() {
    var tagElement = document.createElement('input');
    tagElement.setAttribute ( 'type', 'button' );
    tagElement.setAttribute ( 'class', 'button col-xs-6 center-block' );
    tagElement.setAttribute ( 'value', 'Проверить мои результаты' );
    return tagElement;
  },
  p: function creatTagElement(a) {
    var tagElement = document.createElement('p');
    var a;
    tagElement.innerHTML = ('Вариант ответа №' + a);
    return tagElement;
  },
};
var header = document.getElementsByTagName('head');
var body = document.getElementsByTagName('body');
// add element in html
header[0].appendChild(cssClassFile.bootstrap());
header[0].appendChild(cssClassFile.bootstrapTheme());
header[0].appendChild(cssClassFile.customer());
body[0].appendChild(bodyTag.divContainerFluid());
var divContainerFluid = document.querySelectorAll('.container-fluid');
function divRowInHtml() {
  for (var i = 0; i < 2; i++) {
    divContainerFluid[0].appendChild(bodyTag.divRow());
  };
}
divRowInHtml();
var divRow = document.querySelectorAll('.row');
divRow[0].appendChild(bodyTag.h1TextCenter());
divRow[1].appendChild(bodyTag.form());
var form = document.querySelectorAll('.form-horizontal');
function h3AndDivCheckboxInHtml() {
  for (var i = 0; i < 3; i++) {
  var a = 1;
  form[0].appendChild(bodyTag.h3(a++));
  form[0].appendChild(bodyTag.divCheckbox()); // second block
  }
};
var boxElement = h3AndDivCheckboxInHtml();
form[0].appendChild(bodyTag.inputButton());
var divCheckbox = document.querySelectorAll('.checkbox');

console.log(divCheckbox);

function h3AndDivCheckboxInHtml() {
  divCheckbox[0].appendChild(bodyTag.label());
  divCheckbox[0].appendChild(bodyTag.label());
  divCheckbox[0].appendChild(bodyTag.label());
};
h3AndDivCheckboxInHtml();
// divCheckbox[0].appendChild(bodyTag.label());
// divCheckbox[0].appendChild(bodyTag.label());
// divCheckbox[0].appendChild(bodyTag.label());
// divCheckbox[1].appendChild(bodyTag.label());
// divCheckbox[1].appendChild(bodyTag.label());
// divCheckbox[1].appendChild(bodyTag.label());
// divCheckbox[2].appendChild(bodyTag.label());
// divCheckbox[2].appendChild(bodyTag.label());
// divCheckbox[2].appendChild(bodyTag.label());
var label = document.getElementsByTagName('label');
label[0].appendChild(bodyTag.inputCheckbox());
label[0].appendChild(bodyTag.p(1));
label[1].appendChild(bodyTag.inputCheckbox());
label[1].appendChild(bodyTag.p(2));
label[2].appendChild(bodyTag.inputCheckbox());
label[2].appendChild(bodyTag.p(3));
// second block
label[3].appendChild(bodyTag.inputCheckbox());
label[3].appendChild(bodyTag.p(1));
label[4].appendChild(bodyTag.inputCheckbox());
label[4].appendChild(bodyTag.p(2));
label[5].appendChild(bodyTag.inputCheckbox());
label[5].appendChild(bodyTag.p(3));
// third block
label[6].appendChild(bodyTag.inputCheckbox());
label[6].appendChild(bodyTag.p(1));
label[7].appendChild(bodyTag.inputCheckbox());
label[7].appendChild(bodyTag.p(2));
label[8].appendChild(bodyTag.inputCheckbox());
label[8].appendChild(bodyTag.p(3));
