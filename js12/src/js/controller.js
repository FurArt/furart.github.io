try {
  define(
    'controller',
    ['lodash','jquery'],
    function( ) {
      return {
        Controller : function (model, view) {
          var that = this;
            view.elements.button
          .on('click', addList);
          function addList() {
            console.log('work');
            var valueNewline = view.elements.input.val();
            model.addItem(valueNewline);
            view.renderList(model.data);
            view.elements.input.val('');
          }
          view.elements.ulList
          .on('click', '.remove-item', removeList);
          function removeList() {
            var listItem = $(this).attr('data-value');
            model.removeItem(listItem);
            view.renderList(model.data);
          }

        }
      }

    }
  );

} catch (e) {
  console.log(e);
} finally {

}
