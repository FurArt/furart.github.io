try {
  define(
    'model',
    ['lodash'],
    function( ) {
      return {
        Model: function (data) {
          var that = this;
          that.data = {
            requestImg: data,
            imgData: [],
            addItem: function(item) {
              if (item.length === 0) {
                return;
              }
              that.data.imgData.push(item);
              return that.data.imgData;
            },
            removeItem: function(item) {
              if (item.length === 0) {
                return;
              };

              var index = that.data.imgData.indexOf(item);

              if (index === -1) {
                return;
              };
              that.data.imgData.splice(index, 1);
              return that.data.imgData;
            },
            deleteBase: function() {
              var indexQ = that.data.imgData.length
              that.data.imgData.splice(0, indexQ)
            }
          };





          return this;
        },
      };

    }
  );

} catch (e) {
  console.log(e);
} finally {

}
