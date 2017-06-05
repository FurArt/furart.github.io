try {
  define(
    'view',
    ['lodash'],
    function( ) {
      return {
          View : function (data) {
           if (document.readyState == 'complete') {
             console.log('s');
            var that = this;
            that.init = function(data) {
                var tagTamplete =document.querySelector('#wrapper-tmpl').innerHTML;
                console.log(tagTamplete);
                document.querySelector('body').appendChild("'"+tagTamplete+"'");
              }

                // that.renderImg(data);
                that.init(data);
            };

            // that.renderImg = function(data) {
            //   var divWrapper = _.template(document.querySelector('.wrapper'));
            //   var base = {
            //     count : data.length,
            //     li : data
            //   };
            //   document.querySelector('.wrapper').appendChild(
            //     divWrapper(base)
            //   );
            //
            // };

        //end module
        }
      };
    }
  );
} catch (e) {
  console.log(e);
} finally {

}
