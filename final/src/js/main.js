  require.config({
    paths:{
      'lodash' :  'lodash.min',
      'documentReady': 'jquery.documentReady',
      'masonry': '//unpkg.com/masonry-layout@4/dist/masonry.pkgd.min',
    },
    shim: {
      'lodash' : {
        exports : 'lodash'
      },
      'documentReady' : {
        exports : 'documentReady'
      },
      'masonry' : {
        exports : 'masonry'
      },
    }
  });


  require(
    [
      'lodash',
      'documentReady',
      'masonry',
      'model',
      'view',
      'controller'
    ],
    function(_, $, masonry, model, view, controller) {
        var informForStart = ['яблуко', 'апельсин', 'абрикос','машина','вишня','слива','груша'] // тематика картинок при загрузке
        var initModel = new model.Model(informForStart);
        var initView = new view.View(initModel.data);
        var startControl = new controller.Controller(initModel, initView);
        console.log(initView.element.wrapper);
        var msnr = new masonry(initView.element.wrapper,{
            columnWidth: 320,
            itemSelector: '.masonry'
          });
    }
  );
