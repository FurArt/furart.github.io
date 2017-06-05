try {
  define(
    'controller',
    ['lodash'],
    function( ) {
      return {
        Controller : function (model, view) {
          var that = this;
          console.log('model', model);
          console.log('view ', view);

          },
      };

    }
  );

} catch (e) {
  console.log(e);
} finally {

}
