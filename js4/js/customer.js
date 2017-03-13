
//task_1
var $writerText = {};
  $ (function () {
    var $findControl = $('.form-control');
    var $findButton = $('.button-show');
    $findButton.on("click", function(event) {
      event.preventDefault();
      $("input").each(function() {
        $writerText.title = $(this).attr("title");
        $(this).siblings('.form-help')
        .text($writerText.title)
        .fadeTo(500, 1, function () {
          $(this).removeClass('hidden')
        })
      })
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
      var $find = $(this).attr('title', $writerText.title).siblings('.form-help').fadeTo(500, 0, function () {
        $(this).addClass('hidden');
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
