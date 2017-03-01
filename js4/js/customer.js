  $ (function () {
    var $findControl = $('.form-control');
    var $findButton = $('#show');
    $findButton.click( function () {
        if ($(".form-help").hasClass('hidden')) {
          var $find= $('.form-help').fadeTo(500, 1, function () {
            $(this).removeClass('hidden')})
        } else {
          var $find = $('.form-help').fadeTo(500, 0, function () {
            $(this).addClass('hidden')
          })
        }


        console.log($find);
      });



    $findControl.mouseenter( function() {
      var $find = $(this).siblings('.form-help').fadeTo(500, 1, function () {
        $(this).removeClass('hidden')
      })
    });
    $findControl.mouseout( function() {
      var $find = $(this).siblings('.form-help').fadeTo(500, 0, function () {
        $(this).addClass('hidden')
      })
    });
    console.log($findButton);


    // .siblings('.form-help')

});
