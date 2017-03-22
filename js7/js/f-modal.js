
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
}( jQuery ));
