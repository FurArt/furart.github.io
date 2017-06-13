  require.config({
    paths:{
      'lodash' :  'lodash.min',
      'documentReady': 'jquery.documentReady',
      'masonry': '//unpkg.com/masonry-layout@4/dist/masonry.pkgd.min',
      'lory':'lory.min',
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
      'lory' : {
        exports : 'lory'
      },
    }
  });


  require(
    [
      'lodash',
      'documentReady',
      'masonry',
      'lory',
      'model',
      'view',
      'controller'
    ],
    function(_, $, masonry, lory, model, view, controller) {
        var informForStart = ['яблуко', 'апельсин', 'абрикос','машина','вишня','слива','груша'] // тематика картинок при загрузке
        var initModel = new model.Model(informForStart);
        var initView = new view.View(initModel.data);
        var startControl = new controller.Controller(initModel, initView);
        console.log(initView.element.wrapper);
        var msnr = new masonry(initView.element.wrapper,{
            // columnWidth: 220,
            itemSelector: '.masonry',
          });
          initView.element.wrapper.style.height = "auto";
          lory.lory(initView.element.slider,{
            rewind: true,
            infinite: 1
          });
          lory.lory(initView.element.sliderSecond,{
            rewind: true,
            infinite: 1
          });
          lory.lory(initView.element.sliderThird,{
            rewind: true,
            infinite: 1
          });
    }
  );


if (true) {

}
