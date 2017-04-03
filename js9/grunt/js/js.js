/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>
<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; Licensed <%= props.license %> */
'use strict'
var weatherDate = {
  city : 'Полтава ',
  id : 696643,
  ajaxDate: function(responseJSON) {
    this.name = responseJSON.name;
    this.id = responseJSON.id;
    this.cod = responseJSON.cod;

    $('#openweathermap-widget').children().remove();
    window.myWidgetParam = {
      id: 11,
      cityid: weatherDate.id,
      appid: '700de4cce14ba749fb91a374470c4734',
      units: 'metric',
      containerid: 'openweathermap-widget',
    };
    (function() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
    })();

  },
};

window.myWidgetParam = {
  id: 11,
  cityid: 696643,
  appid: '700de4cce14ba749fb91a374470c4734',
  units: 'metric',
  containerid: 'openweathermap-widget',
};
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
})();

$(function() {
  $('#openweathermap-widget-btn').on('click', function(e) {
      if (e.type === 'click') {
        weatherDate.city = $('.form-control').val();
        $.ajax({
          url:'http://api.openweathermap.org/data/2.5/weather?q='+weatherDate.city+'&units=metric&callback=weatherDate.ajaxDate&APPID=700de4cce14ba749fb91a374470c4734',
          dataType: 'jsonp',
        });
      }
    }
  );
  $('.form-control').on('keydown', function(e) {
      if ((e.keyCode == 13) || (e.keyCode == 10) ) {
        weatherDate.city = $('.form-control').val();
        $.ajax({
          url:'http://api.openweathermap.org/data/2.5/weather?q='+weatherDate.city+'&units=metric&callback=weatherDate.ajaxDate&APPID=700de4cce14ba749fb91a374470c4734',
          dataType: 'jsonp',
        });
      }
    }
  );
});





// if ()
//


// var workDataTest;
//зачистка

'use strict'

var workDataTest;
var dataTest =[
      {
        testName: 'Тест который можно написать здесь'
      },
      {
        qustion: 'Каким цветом яблоко?',
        answer: [['зеленое',1], ['фиолетовые',0], ['чёрное',0],['синие',0],],
      },
      {
        qustion: 'Каким цветом нога?',
        answer: [['красное',0], ['фиолетовые',0], ['цвет кожи',1],['синие',0],],
      },
      {
        qustion: 'Каким цветом рука?',
        answer: [['желтое',0], ['цвет кожи',1], ['чёрное',0],['синие',0],],
      },
      {
        qustion: 'Каким цветом листья дерева?',
        answer: [['бирюзовое',1], ['фиолетовые',0], ['чёрное',0],['синие',0],],
      },
      {
        qustion: 'Каким цветом синея слива?',
        answer: [['какаята',0], ['фиолетовая',0], ['чёрноя',0],['синия',1],],
      },
      {
        qustion: 'Каким цветом синея слива?',
        answer: [['какаята',0], ['фиолетовая',0], ['чёрноя',0],['синия',1],],
      },
      {
        qustion: 'Каким цветом синея слива?',
        answer: [['какаята',0], ['фиолетовая',0], ['чёрноя',0],['синия',1],],
      },  {
          qustion: 'Каким цветом синея слива?',
          answer: [['какаята',1], ['фиолетовая',0], ['чёрноя',0],['синия',1],],
        },

  ];
  var strDataTest = JSON.stringify(dataTest);

  try {
    workDataTest = JSON.parse(localStorage.storageDataTest)
    if (strDataTest == localStorage.storageDataTest ) {
    } else {
      localStorage.setItem('storageDataTest', strDataTest);
    };
    console.log('try');
  } catch (e) {
    localStorage.setItem('storageDataTest', strDataTest);
    workDataTest = JSON.parse(localStorage.storageDataTest);
    console.log("catch-cahnge");
  }
  console.log(workDataTest);
//То на что мы можем влиять:)

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
    tagElement.setAttribute ( 'type', 'checkbox' );
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
  fModal: function creatTagElement() {
    var tagElement = document.createElement('div');
    tagElement.classList.add ( 'f-modal' );
    tagElement.setAttribute ( 'role', 'dialog' );

    return tagElement;
  },
};

//add css link in head

var customerAnswer = {
  answerQaunt: 0,
};
var allDoneAnswer = 0;
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
// modal start
  (function( $ ){
    $.fn.fModal = function(options) {

      var settings = $.extend( {
        'titleFModul'  : 'Укажите здесь заголовок', // title
        'contentFModul' : 'Укажите необходимый текст', // content
        'widthFModulWidth' : 300 + 'px',
        'heightFModulWidth' : 100 + 'px'
      }, options);

  var titleFModul = '';
  var fModal = this;
      this.html("<div class='f-modal-dialog'><div class='f-modal-header'><h4 class='f-modal-header-text'>"+settings.titleFModul+"</h4></div><div class='f-modal-body'><p class='f-modal-content'>"+settings.contentFModul+"</p></div><div class='f-modal-footer'><button type='button' class='button f-modal-button-prev'>Закрыть</button></div></div>")
      this.find(".f-modal-button-prev").on('click', function() {
        fModal.remove();
      })
      $('.f-modal-dialog').css({
        'width' :settings.widthFModulWidth,
        'height' :settings.heightFModulWidth

      })
      return this
    };
  }( jQuery )); // modal end


  $(function() {
    // $("body").append(bodyTag.fModal());// modal window


    $("body").append(bodyTag.divContainerFluid());

    $(".container-fluid").append(bodyTag.divRow(), bodyTag.divRow());
    $($(".row")[1]).append(bodyTag.h1TextCenter());
    $($(".row")[2]).append(bodyTag.form());
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
      $("form").append(bodyTag.inputButton);



      $(".button ").on('click', function(e) {
      e.preventDefault();

      for (var i = 1; i < (workDataTest.length); i++) {
        var inputName = 'qustion-' + i;
        customerAnswer[i] = ($('input[name='+ inputName +']:checked').val());
      };
      var dataLength = workDataTest.length;

      for (var i = ((dataLength) - 1); i > 0; i--) {
        if ( ( typeof customerAnswer[i] === "undefined" )) {
          customerAnswer.answer = 'Ответье на все вопросы';
            $('body').append("<div class='f-modal fade' role='dialog'></div>")
            $('.f-modal').fModal({
              'titleFModul' : 'Результат:',
              'contentFModul' : customerAnswer.answer,
              'widthFModulWidth' : 'auto',
            });

          break;
        } else if ((customerAnswer[i] === '0')) {

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
