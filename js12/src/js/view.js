try {
  define(
    'view',
    ['lodash'],
    function( ) {
      return {
          View : function (data) {
            var that = this;
            that.init = function() {
              var divWrapper = _.template($('#wrapper-tmpl').html())
              $('body').append(divWrapper);

              that.renderList(data);
            };

            that.renderList = function(data) {
              var divWrapper = _.template($('#li-tmpl').html());
              var base = {
                count : data.length,
                li : data
              };
              $('.list-item').html(divWrapper(base));
            };

            that.init();
            that.elements = {
              temleteWraper : $('#wrapper-tmpl'),
              ulList : $('.list-item'),
              input : $('.value-item'),
              inputCheckbox: $("[type='checkbox']"),
              button : $('.add-item'),
              wrapper : $('.wrapper'),
            };

        }
      };

    }
  );

} catch (e) {
  console.log(e);
} finally {

}
