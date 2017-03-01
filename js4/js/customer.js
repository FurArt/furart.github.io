  $ (function () {
    var $findControl = $('.form-control');
    var $findButton = $('#show');
    $findButton.click( function () { // функция на клик
        if ($(".form-help").hasClass('hidden')) {
          var $find= $('.form-help').fadeTo(500, 1, function () {
            $(this).removeClass('hidden')})
        } else {
          var $find = $('.form-help').fadeTo(500, 0, function () {
            $(this).addClass('hidden')
          })
        }
      });
    $findControl.mouseenter( function() { // функция наведение мыши
      var $find = $(this).siblings('.form-help').fadeTo(500, 1, function () {
        $(this).removeClass('hidden')
      })
    });
    $findControl.mouseout( function() {
      var $find = $(this).siblings('.form-help').fadeTo(500, 0, function () {
        $(this).addClass('hidden')
      })
    });
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
