var $varTest = {};

(function( $ ){

  $.fn.fCurusel = function( options ) {

    // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
    var settings = $.extend( {
      'imgWidth'         : '175px',
      'qaunt' : '5'
    }, options);

    return this.each(function() {

      // var $caruselWraper
    $varTest.test    = $(".fcarousel-wrapper");
      // = $caruselWraper.children().children(".fcarousel-list");

    });

  };
})( jQuery );
$('.fcarousel-wrapper').fCurusel();

console.log($varTest.test);
