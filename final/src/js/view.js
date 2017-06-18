try {
  define(
    'view',
    ['lodash', 'documentReady', 'controller'],
    function( ) {
      return {
          View : function (data) {
            console.log(data);
            var that = this;
            that.init = function() {
                $(function() {

                  var tagTamplete =document.querySelector('#wrapper-tmpl').innerHTML;

                  document.querySelector('.container').innerHTML = tagTamplete ;

                  // that.renderImg(data);
                  that.writeCss();
                });

              };

            that.renderImg = function(e) {
              var divWrapper = _.template(document.querySelector('#img-masonry').innerHTML);
              var base = {
                count : 7,
                img : e.data.imgData
              };
              console.log(base);
              // .img["0"]["0"] - img
              // .img["0"][1] - text for img
              document.querySelector('.wrapper').innerHTML = divWrapper(base);
            };
            that.writeCss = function() {
              var tagLinkCss = document.createElement('link');

              function addAttr(e) {
                  tagLinkCss.setAttribute ( 'href', e );
                  tagLinkCss.setAttribute ( 'rel', 'stylesheet' );
                  return document.querySelector('head').appendChild(tagLinkCss);
              }
              that.withWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

              if (that.withWindow < 768) {
                addAttr('css/style-mobile.css');
              } else if ((that.withWindow <= 768)||(that.withWindow < 940)) {
                addAttr('css/style-table.css' );
              } else {
                addAttr('css/style-desktop.css');
              };
            };

            window.addEventListener("orientationchange", function() {
              that.init(data);
            });
            that.init(data);
            //this obc need for search DOM element
            that.element = {
                inputIdeas : document.querySelector('.ideas-input-form'),
                inputBtn : document.querySelector('.ideas-btn'),
                wrapper : document.querySelector('.wrapper'),
                masonryItem : document.querySelectorAll('.masonry'),
                masonryImg : document.querySelectorAll('.masonry-img'),
                slider : document.querySelector('#first-slider'),
                sliderSecond :document.querySelector('#second-slider'),
                sliderThird :document.querySelector('#third-slider'),
              };

          },
        //end module
      }
    }

  );
} catch (e) {
  console.log(e);
} finally {

}
