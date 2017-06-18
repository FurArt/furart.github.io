  require.config({
    paths:{
      'lodash' :  'lodash.min',
      'documentReady': 'jquery.documentReady',
      'masonry': 'masonry.pkgd.min',
      'lory':'lory.min',
      'imagesloaded':'imagesloaded.pkgd'
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
      'imagesloaded':{
        exports : 'imagesloaded'
      },
    }
  });


  require(
    [
      'lodash',
      'documentReady',
      'imagesloaded',
      'masonry',
      'lory',
      'model',
      'view',
      'controller'
    ],
    function(_, $, imagesLoaded, masonry, lory, model, view, controller) {
        var informForStart = ['яблуко', 'апельсин', 'абрикос','машина','вишня','слива','груша'] // тематика картинок при загрузке
        var initModel = new model.Model(informForStart);
        var initView = new view.View(initModel.data);
        var startControl = new controller.Controller(initModel, initView);
        //masonry
        console.log();
        var msnr;
        function loadMasonary() {
          // if (startControl.load === 1) {

            msnr = new masonry(initView.element.wrapper,{
              columnWidth: 300,
              itemSelector: '.masonry',
              gutter:20,
            });
            startControl.load = 0;
            console.log('done!',msnr);
          // } else {
            console.log('load');
            clearInterval(masonryLoadTime)
          // }
        };

        var masonryLoadTime = setInterval(loadMasonary, 200);
        function watchImageload() {
          imagesLoaded(initView.element.wrapper).on('progress',function() {
            loadMasonary();
          });
        };
        watchImageload()
        initView.element.inputBtn.addEventListener('click', watchImageload)
        initView.element.inputIdeas.addEventListener('keypress', function(e) {
          if (e.keyCode===13) {
            watchImageload();
          };
        });
        try {
          // startControl.sendRequest(masonryLoadTime);

        } catch (e) {
          console.log(e);
        } finally {

        }


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
