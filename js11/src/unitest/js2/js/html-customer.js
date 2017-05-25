
  //
  //
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
      tagElement.classList.add ( 'container-fluid' );
      return tagElement;
    },
    divRow: function creatTagElement() {
      var tagElement = document.createElement('div');
      tagElement.classList.add ( 'row' );
      return tagElement;
    },
    divCheckbox: function creatTagElement() {
      var tagElement = document.createElement('div');
      tagElement.classList.add ( 'checkbox' );
      return tagElement;
    },
    h1TextCenter: function creatTagElement() {
      var tagElement = document.createElement('h1');
      tagElement.classList.add ( 'text-center' );
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
      tagElement.classList.add ( 'center-block' );
      tagElement.classList.add ( 'form-horizontal' );
      tagElement.setAttribute ( 'action', 'index.html' );
      tagElement.setAttribute ( 'method', 'post' );
      return tagElement;
    },
    label: function creatTagElement() {
      var tagElement = document.createElement('label');
      tagElement.classList.add ( 'checkbox' );
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
      tagElement.classList.add ( 'button' );
      tagElement.classList.add ('col-xs-6');
      tagElement.classList.add ('center-block');
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

  // add element in html


  try {
    var header = document.getElementsByTagName('head');
    var body = document.getElementsByTagName('body');

    (function addHtml(a) {
      header[a].appendChild(cssClassFile.bootstrap());
      header[a].appendChild(cssClassFile.bootstrapTheme());
      header[a].appendChild(cssClassFile.customer());
      body[a].appendChild(bodyTag.divContainerFluid());
    })(0);
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
      for (var i = 1; i < 4; i++) {
        form[0].appendChild(bodyTag.h3(i));
        form[0].appendChild(bodyTag.divCheckbox()); // second block
      }
    };
    var boxElement = h3AndDivCheckboxInHtml();
    form[0].appendChild(bodyTag.inputButton());
    var divCheckbox = document.querySelectorAll('.checkbox')
    console.log(divCheckbox);
    function labelInHtml(){
      for (var i = 0; i < 3; i++) {
        divCheckbox[i].appendChild(bodyTag.label());
        divCheckbox[i].appendChild(bodyTag.label());
        divCheckbox[i].appendChild(bodyTag.label());
      };
    };
    labelInHtml();

    var label = document.getElementsByTagName('label');

    function inputCheckboxInHtml() {
      for (var i = 0; i <= 8; i++) {
        label[i].appendChild(bodyTag.inputCheckbox());
      };
    };
    inputCheckboxInHtml();
    var blockQuestion;
    function appendChildInHtml(blockQuestion) {
      for (var i = 0; i < 3; i++) {
        label[+blockQuestion + i].appendChild(bodyTag.p(i+1));
      };
    };
    appendChildInHtml(0);
    appendChildInHtml(3);
    appendChildInHtml(6);
  } catch (e) {
    console.log(e);

  }
