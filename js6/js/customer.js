var $varTest = {};

(function( $ ){

  $.fn.fCurusel = function( options ) {

    // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
    var settings = $.extend( {
      'imgWidth'  : 175,
      'qauntImg'  : 0, // общее количество фото галереи
      'listWidth' : 0,
      'qauntImgShow' : 3,
      'fcarouselWidth' : 0,
      'minimuSet': 0,
      'maksimumSet': 0,
      'positionCaunt':0,
    }, options);
    settings.qauntImg = this.find(".fcarousel-element").length;
    settings.listWidth = (settings.imgWidth + 10) * settings.qauntImg;
    settings.fcarouselWidth = settings.qauntImgShow * (settings.imgWidth + 10);
    settings.maksimumSet = (settings.qauntImg - settings.qauntImgShow) * (settings.imgWidth + 10);

     var elementFC = this.children().children().children().children('.fcarousel-img');
      elementFC.css({
        "width": settings.imgWidth +"px",
      });
      elementFC.parents('.fcarousel')
      .css({
      "width": settings.fcarouselWidth + "px",
      });
      elementFC.parents('.fcarousel-list')
      .css({
      "width": settings.listWidth + "px",
      });
      this.find(".fcarousel-control-prev").on("click", function() {
        if (settings.positionCaunt != settings.minimuSet) {
          settings.positionCaunt = settings.positionCaunt + 10 + settings.imgWidth;
          elementFC.parents('.fcarousel-list').animate({"left":settings.positionCaunt+'px'})
        }
      })

      this.find(".fcarousel-control-next").on("click", function() {
        if (( - settings.positionCaunt) != settings.maksimumSet) {
          console.log( 'settings.maksimumSet:', settings.maksimumSet);
          console.log('settings.positionCaunt:', settings.positionCaunt);
          settings.positionCaunt = settings.positionCaunt - settings.imgWidth - 10;
          elementFC.parents('.fcarousel-list').animate({"left":settings.positionCaunt+'px'})
        }
      })
    return this
  };
})( jQuery );
$( function() {

  $('.fcarousel-wrapper').fCurusel()
});
