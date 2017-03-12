$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});
$(function() {
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-control-next').jcarouselControl({
        target: '+=1'
    });
    //select css
    $('input, select, checkbox').styler();

});
// $(function() {
//   var $linkMenu = $(".dropdown-menu_js");
// $linkMenu.hover(function () {
//   $(this).children("ul").toggle(
//     "slow"
// )}, function() {
//   $(this).children("ul").toggle(
//     "slow"
//   )
// });

$(function() {
  var $linkMenu = $(".dropdown-menu_js");
$linkMenu.hover(function () {
  $(this).children("ul")
  .css("display","block")
  .animate({
    height:"100%",
  }, 300, function() {
    $(this).children(".dropdown-menu_element")
    .animate({backgroundColor:"#D4D1D1"},500)
  });
}, function() {
  $(this).children("ul")
  .animate({
  height:"0",
},300, function() {
  $(this)
  .css("display","none")
  .children(".dropdown-menu_element")
  .animate({backgroundColor:"#eee"},500);
});
});
})
