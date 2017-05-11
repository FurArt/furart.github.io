(function( $ ){

  $.fn.fCurusel = function( options ) {

    // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
    var settings = $.extend( {
      'imgWidth'  : 175, // ширина 1 фото
      'qauntImg'  : 0,
      'listWidth' : 0,
      'qauntImgShow' : 3,// количество фото галереи отображаемыъ
      'fcarouselWidth' : 0,
      'minimuSet': 0,
      'maksimumSet': 0,
      'positionCaunt':0,
      'qauntImgAll': 0,
    }, options);
    settings.qauntImg = this.find(".fcarousel-element").length;
    settings.listWidth = (settings.imgWidth) * settings.qauntImg;
    settings.fcarouselWidth = settings.qauntImgShow * (settings.imgWidth);
    settings.maksimumSet = (settings.qauntImg - settings.qauntImgShow) * (settings.imgWidth);

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
          elementFC.parents('.fcarousel-list').animate({"left":settings.positionCaunt+'px'});
        }
      })

      this.find(".fcarousel-control-next").on("click", function() {
        if (( - settings.positionCaunt) != settings.maksimumSet) {
          settings.positionCaunt = settings.positionCaunt - settings.imgWidth - 10;
          elementFC.parents('.fcarousel-list').animate({"left":settings.positionCaunt+'px'});
        }
      });
    settings.qauntImgAll=this.find('.fcarousel-element').length;
    for (var i = 0; i < settings.qauntImgAll; i++) {
      this.find(".fcarousel-panel").append("<li class='fcarousel-btn'><a href='"+i+"'></li>")
    };
    if (this.find('.fcarousel-btn').length>0) {
        $(this.find('.fcarousel-btn')[0]).find('a').addClass('active-btn')
    }
      $(this.find('.fcarousel-btn')).find('a').click( function(e) {
          e.preventDefault();

          var $caruselBtnCaunt = $(this).attr('href');
          var $left = -(settings.imgWidth * $caruselBtnCaunt);
          elementFC.parents('.fcarousel-list').animate({"left": $left + 'px'});
          console.log(

          );
          $('.active-btn').removeClass('active-btn');
          $(this).addClass('active-btn');
      })
    return this
  };
})( jQuery );

$( function() {
  $('.fcarousel-wrapper').fCurusel(
    {
    'qauntImgShow' : 1,
    'imgWidth'  : 1160,
    }
  );
});
try {
  $(function () {
    var $linkFindClass =  $(".panel-container-element");
      $linkFindClass.click( function(e) {
          e.preventDefault();
          if ($(this).hasClass('active_panel-container-element')) {
            $(this).removeClass('active_panel-container-element');
            $($($(this).find('a')).attr('href')).removeClass('active-panel-content');
          } else {
            // $($(this).siblings('.active_panel-container-element'))
            // .removeClass('active_panel-container-element');
            // $($(this).siblings('.panel-content'))
            // .removeClass('active-panel-content');
            $(this).addClass('active_panel-container-element');
            $($($(this).find('a')).attr('href')).addClass('active-panel-content');
          }
        }
    )
});

} catch (e) {
console.log(e);
} finally {

}
