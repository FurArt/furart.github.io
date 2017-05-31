try {
  define(
    'controller',
    ['lodash','jquery'],
    function( ) {
      return {
        Controller : function (model, view) {
          var that = this;
          function wrapperPosition() {
            var heightWraper = view.elements.wrapper.height();
            var widthWraper = view.elements.wrapper.width();
            view.elements.wrapper.css({
              'margin-top': -heightWraper/2,
              'margin-left': -widthWraper/2,
              'padding' : '3%',
            })
            view.elements.wrapper.css({})


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
          .on('click', '.remove-item', removeList);
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
