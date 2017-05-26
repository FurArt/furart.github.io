try {
  define(
    'model',
    ['lodash'],
    function( ) {
      return {
        Model : function (data) {
          var that = this;
          that.data = data;
          that.addItem = function(item) {
            if (item.length === 0) {
              return;
            }
            that.data.push(item);

            return that.data;
          };

          that.removeItem = function(item) {
            if (item.length === 0) {
              return;
            };

            var index = that.data.indexOf(item);

            if (index === -1) {
              return;
            };
            that.data.splice(index, 1);
            return that.data;
          };


          return this;
      }
      };

    }
  );

} catch (e) {
  console.log(e);
} finally {

}
