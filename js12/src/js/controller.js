try {
  define(
    'controller',
    ['lodash','jquery'],
    function( ) {
      return {
        Controller : function (model, view) {
          var that = this;
          function wrapperPosition() {
            var heightWraper = view.elements.wrapper.outerHeight();
            var widthWraper = view.elements.wrapper.width();
            view.elements.wrapper.css({
              'margin-top': -heightWraper/2,
              'margin-left': -widthWraper/2,
            });

          };
          wrapperPosition();
            view.elements.button
          .on('click', addList);
          function addList() {
            var valueNewline = view.elements.input.val();
            model.addItem(valueNewline);
            view.renderList(model.data);
            view.elements.input.val('');
            wrapperPosition();
          } // add item to do list
            view.elements.ulList
          .on('click', '.remove-item', removeList)
          .on('click', 'p', addChange);
          function addChange() {
            $(this).attr('contenteditable','true')
            // .on('mouseleave',function() {
            //   $(this).attr('contenteditable','false')
            // })
            .keypress(function(e) {
              if(e.which === 13){
                $(this).attr('contenteditable','false')
              };
            });
            // console.log($(this));
            //contenteditable='true'
          }
          // $('body').keypress(function(e) {
          //   console.log(e.which);
          // })

          function removeList() {
            var listItem = $(this).attr('data-value');
            model.removeItem(listItem);
            view.renderList(model.data);
          }; // remove item froom do list
        },
      };

    }
  );

} catch (e) {
  console.log(e);
} finally {

}
