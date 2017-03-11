
//task_1
var $writerText = {};
  $ (function () {
    var $findControl = $('.form-control');
    var $findButton = $('#show');
    $findButton.click( function () { // функция на клик
        if ($(".form-help").hasClass('hidden')) {
          $writerText.firstname = $("#firstname").attr("title");
          $writerText.lastname = $("#lastname").attr("title");
          $writerText.address = $("#address").attr("title");
          var $find= $('.form-help');
          console.log($find);
          $($find[0]).text($writerText.firstname);
          $($find[1]).text($writerText.lastname);
          $($find[2]).text($writerText.address);

          $find.fadeTo(500, 1, function () {
            $(this).removeClass('hidden')})
        } else {
          var $find = $('.form-help')
          .fadeTo(500, 0, function () {
            $(this).addClass('hidden')
          })
        }
      });
    $findControl.mouseenter( function() { // функция наведение мыши
      $writerText.title = $(this).attr("title");
      $(this).removeAttr("title");
      var $find = $(this)
      .siblings('.form-help')
      .text($writerText.title)
      .fadeTo(500, 1, function () {
        $(this).removeClass('hidden')
      })
    });

    $findControl.mouseout( function() {
      var $find = $(this).siblings('.form-help').fadeTo(500, 0, function () {
        $(this).addClass('hidden')
      })
    });
  });


$ (function () {

    //task_2
    var $linkFindClass =  $(".link-content");
    $linkFindClass.click(function () {
      if ($(this).hasClass("active")) {//проверка скликивание по 1 кнопке
      } else {
        $(".active").removeClass('active');
        var $href = $(this).attr('href');
        var $findId = $($href);
        $findId.addClass('active')
        $(this).addClass('active');
      };
    });

});
