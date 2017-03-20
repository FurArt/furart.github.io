//зачистка
function claer() {
  localStorage.clear();
}
claer();
//То на что мы можем влиять:)
var dataTest =[
    {
      testName: 'Тест который можна написть сдесь'
    },
    {
      qustion: 'Каким цветом яблоко?',
      answer: [['зеленое',true], ['фиолетовые',false], ['чёрное',false],['синие',false],],
    },
    {
      qustion: 'Каким цветом нога?',
      answer: [['красное',false], ['фиолетовые',false], ['цвет кожи',true],['синие',false],],
    },
    {
      qustion: 'Каким цветом рука?',
      answer: [['желтое',false], ['цвет кожи',true], ['чёрное',false],['синие',false],],
    },
    {
      qustion: 'Каким цветом лисьтя дерева?',
      answer: [['бирюзовое',true], ['фиолетовые',false], ['чёрное',false],['синие',false],],
    },
    {
      qustion: 'Каким цветом синия слива?',
      answer: [['какаята',false], ['фиолетовая',false], ['чёрноя',false],['синия',true],],
    },
  ];

//
var strDataTest = JSON.stringify(dataTest);
localStorage.setItem('storageDataTest', strDataTest);
var workDataTest = JSON.parse(localStorage.storageDataTest);
console.log(workDataTest);
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
  Jquery: function creatTagElement() {
    var tagElement = document.createElement('script');
    tagElement.setAttribute ( 'src', 'https://code.jquery.com/jquery-2.2.4.min.js' );
    tagElement.setAttribute ( 'integrity', 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=' );
    tagElement.setAttribute ( 'crossorigin', 'anonymous' );
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
  divCheckbox: function creatTagElement(a) {
    var tagElement = document.createElement('div');
    tagElement.classList.add ( 'checkbox' );
    tagElement.classList.add ( 'checkbox-conteiner-' + a );
    return tagElement;
  },
  h1TextCenter: function creatTagElement() {
    var tagElement = document.createElement('h1');
    tagElement.classList.add ( 'text-center' );
    tagElement.innerHTML = workDataTest["0"].testName;
    return tagElement;
  },
  h3: function creatTagElement(a) {
    var tagElement = document.createElement('h3');
    var b = a - 1;
    tagElement.innerHTML = b + '.' + workDataTest[b].qustion;
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
  label: function creatTagElement(a) {
    var tagElement = document.createElement('label');
    tagElement.classList.add ( 'checkbox' );
    tagElement.classList.add ( 'checkbox-element-' + a );

    return tagElement;
  },
  inputCheckbox: function creatTagElement(a,b) {
    var tagElement = document.createElement('input');
    tagElement.setAttribute ( 'type', 'radio' );
    tagElement.setAttribute ( 'name', 'qustion-'+ b );
    tagElement.setAttribute ( 'value', workDataTest[b].answer[a][1] );

    return tagElement;
  },
  inputButton: function creatTagElement() {
    var tagElement = document.createElement('input');
    tagElement.setAttribute ( 'type', 'submit' );
    tagElement.classList.add ( 'button' );
    tagElement.classList.add ('col-xs-6');
    tagElement.classList.add ('center-block');
    tagElement.setAttribute ( 'value', 'Проверить мои результаты' );

    return tagElement;
  },
  p: function creatTagElement(a,b) {
    var tagElement = document.createElement('p');
    var a;
    var b;
    tagElement.innerHTML = (workDataTest[b].answer[a][0]);
    return tagElement;
  },
};
var customerAnswer = {};
var header = document.getElementsByTagName('head');
var body = document.getElementsByTagName('body');
// add element in html
header[0].appendChild(cssClassFile.bootstrap());
console.log(header);
header[0].appendChild(cssClassFile.bootstrapTheme());
header[0].appendChild(cssClassFile.customer());
header[0].appendChild(cssClassFile.Jquery());
window.addEventListener("load",customerJQ);
function customerJQ() {
  $(function() {
    $("body").append(bodyTag.divContainerFluid())
              .children()
              .append(bodyTag.divRow())
              .children()
              .append(bodyTag.h1TextCenter())
              .end()
              .append(bodyTag.divRow());
    $($(".row")[1]).append(bodyTag.form())
    // $($(".row")[1]).append(bodyTag.form());
    for (var i = 2; i <= (workDataTest.length); i++) {
        $("form").append(
          bodyTag.h3(i),
          bodyTag.divCheckbox(i)
        )
        var b = i - 1;
        for (var e = 0; e < workDataTest[b].answer.length; e++) {
          $('.checkbox-conteiner-'+i).append(bodyTag.label(e));
          $('.checkbox-conteiner-'+i).children('.checkbox-element-' + e).append(bodyTag.inputCheckbox(e,b), bodyTag.p(e,b));
        };
        for (var e = 0; e < 1; e++) {
        };
      };
      $("form").append(bodyTag.inputButton)
      $(".button ").on('click', function(e) {
      e.preventDefault();
      for (var i = 1; i < (workDataTest.length); i++) {
        var inputName = 'qustion-' + i;
        customerAnswer[i] = ($('input[name='+ inputName +']:checked').val());
      };
      for (var i = 1; i < workDataTest.length; i++) {
        if (customerAnswer[i] === false) {
          alert("Чтото не верно");
        } else {
          alert('все ок')
        }
      }

    }
    );
  }
);



};

// divRow[1].appendChild(bodyTag.form());
// var form = document.querySelectorAll('.form-horizontal');
// function h3AndDivCheckboxInHtml() {
//   for (var i = 1; i < (workDataTest.length - 1) ; i++) {
//   form[0].appendChild(bodyTag.h3(i));
//   form[0].appendChild(bodyTag.divCheckbox()); // second block
//   }
// };
// var boxElement = h3AndDivCheckboxInHtml();
// form[0].appendChild(bodyTag.inputButton());
// var divCheckbox = document.querySelectorAll('.checkbox')
// function labelInHtml(){
//   for (var i = 0; i < 3; i++) {
//     divCheckbox[i].appendChild(bodyTag.label());
//     divCheckbox[i].appendChild(bodyTag.label());
//     divCheckbox[i].appendChild(bodyTag.label());
//   };
// };
// labelInHtml();
// // Когда включена функция выше выдает ошибку: Uncaught TypeError: Cannot read property 'appendChild' of undefined at inputCheckboxInHtml (html-customer.js:133) at html-customer.js:136
// // Вопрос в чем причина и как в будуешм не попадать сюда.
// var label = document.getElementsByTagName('label');
//
// function inputCheckboxInHtml() {
//   for (var i = 0; i <= 8; i++) {
//     label[i].appendChild(bodyTag.inputCheckbox());
//   };
// };
// inputCheckboxInHtml();
// var blockQuestion;
// function appendChildInHtml(blockQuestion) {
//   for (var i = 0; i < 3; i++) {
//     label[+blockQuestion + i].appendChild(bodyTag.p(i+1));
//   };
// };
// appendChildInHtml(0);
// appendChildInHtml(3);
// appendChildInHtml(6);
