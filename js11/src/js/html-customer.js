  'use strict';

let workDataTest;
let dataTest =[
      {
        testName: 'Тест который можно написать здесь'
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
        qustion: 'Каким цветом листья дерева?',
        answer: [['бирюзовое',true], ['фиолетовые',false], ['чёрное',false],['синие',false],],
      },
      {
        qustion: 'Каким цветом синея слива?',
        answer: [['какаята',false], ['фиолетовая',false], ['чёрноя',false],['синия',true],],
      },
      {
        qustion: 'Каким цветом синея слива?',
        answer: [['какаята',false], ['фиолетовая',false], ['чёрноя',false],['синия',true],],
      },
      {
        qustion: 'Каким цветом синея слива?',
        answer: [['какаята',false], ['фиолетовая',false], ['чёрноя',false],['синия',true],],
      },  {
          qustion: 'Каким цветом синея слива?',
          answer: [['какаята',false], ['фиолетовая',false], ['чёрноя',false],['синия',true],],
        },

  ];
  let strDataTest = JSON.stringify(dataTest);

  try {
    workDataTest = JSON.parse(localStorage.storageDataTest)
    if ( strDataTest == localStorage.storageDataTest ) {
    } else {
      localStorage.setItem('storageDataTest', strDataTest);
    };
  } catch (e) {
    localStorage.setItem('storageDataTest', strDataTest);
    workDataTest = JSON.parse(localStorage.storageDataTest);
  }


//То на что мы можем влиять:)

// function writeTagElement(name, ...attr) {
//
// let tag = document.createElement(name);
// debugger
// for (let i of attr) {
//   if (i.href.length) {
//       tag.setAttribute('href', i.href);
//   };
//   if (i.rel.length) {
//       tag.setAttribute('rel', i.rel);
//   };
//   if (i.src.length) {
//       tag.setAttribute('src', i.src);
//   };
//   if (i.class.length) {
//
//   }
//   console.log(tag);
//
// };
//   console.log(attr);
// };
//
// let dataElements = {
//   link : {
//     'href'  : 'css/bootstrap.css',
//     'rel'   : 'stylesheet',
//     'class' : [ ]
//   },
//
// }
// writeTagElement('link', dataElements.link);


let cssClassFile = {
  bootstrap() {
    let tagElement = document.createElement('link');
    tagElement.setAttribute ( 'href', 'css/bootstrap.css' );
    tagElement.setAttribute ( 'rel', 'stylesheet' );
    return tagElement;
  },
  bootstrapTheme() {
    let tagElement = document.createElement('link');
    tagElement.setAttribute ( 'href', 'css/bootstrap-theme.css' );
    tagElement.setAttribute ( 'rel', 'stylesheet' );
    return tagElement;
  },
  customer() {
    let tagElement = document.createElement('link');
    tagElement.setAttribute ( 'href', 'css/customer.css' );
    tagElement.setAttribute ( 'rel', 'stylesheet' );
    return tagElement;
  },
  Jquery() {
    let tagElement = document.createElement('script');
    tagElement.setAttribute ( 'src', 'https://code.jquery.com/jquery-2.2.4.min.js' );
    tagElement.setAttribute ( 'integrity', 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=' );
    tagElement.setAttribute ( 'crossorigin', 'anonymous' );
    return tagElement;
  },
};

let bodyTag = {
  divContainerFluid() {
    let tagElement = document.createElement('div');
    tagElement.classList.add ( 'container-fluid' );
    return tagElement;
  },
  divRow() {
    let tagElement = document.createElement('div');
    tagElement.classList.add ( 'row' );
    return tagElement;
  },
  divCheckbox(a) {
    let tagElement = document.createElement('div');
    tagElement.classList.add ( 'checkbox' );
    tagElement.classList.add ( 'checkbox-conteiner-' + a );
    return tagElement;
  },
  h1TextCenter() {
    let tagElement = document.createElement('h1');
    tagElement.classList.add ( 'text-center' );
    tagElement.innerHTML = workDataTest["0"].testName;
    return tagElement;
  },
  h3(a) {
    let tagElement = document.createElement('h3');
    let b = a - 1;
    tagElement.innerHTML = b + '.' + workDataTest[b].qustion;
    return tagElement;
  },
  form() {
    let tagElement = document.createElement('form');
    tagElement.classList.add ( 'center-block' );
    tagElement.classList.add ( 'form-horizontal' );
    tagElement.setAttribute ( 'action', 'index.html' );
    tagElement.setAttribute ( 'method', 'post' );
    return tagElement;
  },
  label(a) {
    let tagElement = document.createElement('label');
    tagElement.classList.add ( 'checkbox' );
    tagElement.classList.add ( 'checkbox-element-' + a );

    return tagElement;
  },
  inputCheckbox(a,b) {
    let tagElement = document.createElement('input');
    tagElement.setAttribute ( 'type', 'radio' );
    tagElement.setAttribute ( 'name', 'qustion-'+ b );
    tagElement.setAttribute ( 'value', workDataTest[b].answer[a][1] );

    return tagElement;
  },
  inputButton() {
    let tagElement = document.createElement('input');
    tagElement.setAttribute ( 'type', 'submit' );
    tagElement.classList.add ( 'button' );
    tagElement.classList.add ('col-xs-6');
    tagElement.classList.add ('center-block');
    tagElement.setAttribute ( 'value', 'Проверить мои результаты' );

    return tagElement;
  },
  p(a,b) {
    let tagElement = document.createElement('p');
    tagElement.innerHTML = (workDataTest[b].answer[a][0]);
    return tagElement;
  },
  fModal() {
    let tagElement = document.createElement('div');
    tagElement.classList.add ( 'f-modal' );
    tagElement.setAttribute ( 'role', 'dialog' );

    return tagElement;
  },
};

//add css link in head

let customerAnswer = {
  answerQaunt: 0,
};
let allDoneAnswer = 0;
let header = document.getElementsByTagName('head');
let body = document.getElementsByTagName('body');
// add element in html
header[0].appendChild(cssClassFile.bootstrap());
header[0].appendChild(cssClassFile.bootstrapTheme());
header[0].appendChild(cssClassFile.customer());
header[0].appendChild(cssClassFile.Jquery());
window.addEventListener("load",customerJQ);
function customerJQ() {
// modal start
  (function( $ ){
    $.fn.fModal = function(options) {

      let settings = $.extend( {
        'titleFModul'  : 'Укажите здесь заголовок', // title
        'contentFModul' : 'Укажите необходимый текст', // content
        'widthFModulWidth' : 300 + 'px',
        'heightFModulWidth' : 100 + 'px'
      }, options);

  let titleFModul = '';
  let fModal = this;
      this.html("<div class='fade'><div class='f-modal-dialog'><div class='f-modal-header'><h4 class='f-modal-header-text'>"+settings.titleFModul+"</h4></div><div class='f-modal-body'><p class='f-modal-content'>"+settings.contentFModul+"</p></div><div class='f-modal-footer'><button type='button' class='button f-modal-button-prev'>Закрыть</button></div></div></div>")
      this.find(".f-modal-button-prev").on('click', function() {
        fModal.remove();
      });
      $('.f-modal-dialog').css({
        'width' :settings.widthFModulWidth,
        'height' :settings.heightFModulWidth

      })
      return this
    };
  }( jQuery )); // modal end


  $(function() {


    $("body").append(bodyTag.divContainerFluid());

    $(".container-fluid").append(bodyTag.divRow(), bodyTag.divRow());
    $($(".row")[0]).append(bodyTag.h1TextCenter());
    $($(".row")[1]).append(bodyTag.form());
    for (let i = 2; i <= (workDataTest.length); i++) {
        $("form").append(
          bodyTag.h3(i),
          bodyTag.divCheckbox(i)
        )
        let b = i - 1;
        for (let e = 0; e < workDataTest[b].answer.length; e++) {
          $('.checkbox-conteiner-'+i).append(bodyTag.label(e));
          $('.checkbox-conteiner-'+i).children('.checkbox-element-' + e).append(bodyTag.inputCheckbox(e,b), bodyTag.p(e,b));
        };
      };
      $("form").append(bodyTag.inputButton);

      $(".button ").on('click', function(e) {
      e.preventDefault();

      for (let i = 1; i < (workDataTest.length); i++) {
        let inputName = 'qustion-' + i;
        customerAnswer[i] = ($('input[name='+ inputName +']:checked').val());
      };
      let dataLength = workDataTest.length;

      for (let i = ((dataLength) - 1); i > 0; i--) {
        if ( ( typeof customerAnswer[i] === "undefined" )) {
          customerAnswer.answer = 'Ответье на все вопросы';
            $('body').append("<div class='f-modal fade' role='dialog'></div>")
            $('.f-modal').fModal({
              'titleFModul' : 'Результат:',
              'contentFModul' : customerAnswer.answer,
              'widthFModulWidth' : 'auto',
            });

          break;
        } else if ((customerAnswer[i] === 'false')) {

        } else {
        customerAnswer.answerQaunt++
        customerAnswer.answer = 'Ваш результат:';
      }
      };
      if (customerAnswer.answer === 'Ваш результат:') {
        $('body').append("<div class='f-modal fade' role='dialog'></div>")
        $('.f-modal').fModal({
          'titleFModul' : 'Результат:',
          'contentFModul' : customerAnswer.answer +' '+ ( customerAnswer.answerQaunt / ( dataLength - 1 ) * 100 ) + '%',
        });
        customerAnswer.answerQaunt = 0;
      };
      $('input:checked').attr( 'checked', false );
    });
  }
);
};
