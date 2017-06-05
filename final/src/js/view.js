try {
  define(
    'view',
    ['lodash', 'documentReady'],
    function( ) {
      return {
          View : function (data) {
            console.log(data);
            var that = this;
            that.init = function() {
                $(function() {

                  var tagTamplete =document.querySelector('#wrapper-tmpl').innerHTML;

                  document.querySelector('.conteiner').innerHTML = tagTamplete ;

                  that.renderImg(data);
                  that.writeCss();
                });
              };
            that.renderImg = function() {
              var divWrapper = _.template(document.querySelector('#li-tmpl').innerHTML);
              var base = {
                count : data.length,
                li : data
              };
              document.querySelector('.wrapper').innerHTML = divWrapper(base);
            };
            that.writeCss = function() {
              var tagLinkCss = document.createElement('link');
              console.log(tagLinkCss);
              if (window.innerWidth < 768) {
                tagLinkCss.setAttribute ( 'href', 'css/style-mobile.css' );
                tagLinkCss.setAttribute ( 'rel', 'stylesheet' );
                return document.querySelector('head').appendChild(tagLinkCss);
              } else if ((window.innerWidth >= 768)&&(window.innerWidth < 940)) {
                tagLinkCss.setAttribute ( 'href', 'css/style-table.css' );
                tagLinkCss.setAttribute ( 'rel', 'stylesheet' );
                return document.querySelector('head').appendChild(tagLinkCss);
              } else {
                tagLinkCss.setAttribute ( 'href', 'css/style-desktop.css' );
                tagLinkCss.setAttribute ( 'rel', 'stylesheet' );
                return document.querySelector('head').appendChild(tagLinkCss);
              };

            };



            that.init(data);
          },
        //end module
      }
    }

  );
} catch (e) {
  console.log(e);
} finally {

}
