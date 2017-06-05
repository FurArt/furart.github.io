  require.config({
    paths:{
      'lodash' :  'lodash.min',
      'documentReady': 'jquery.documentReady',
    },
    shim: {
      'lodash' : {
        exports : 'lodash'
      },
      'documentReady' : {
        exports : 'documentReady'
      },
    }
  });


  require(
    [
      'lodash',
      'documentReady',
      'model',
      'view',
      'controller'
    ],
    function(_, $, model, view, controller) {
        var informForStart = ['яблуко', 'апельсин', 'абрикос', 'какая-то гадость','вишня','слива','груша'] // тематика картинок при загрузке
        var initModel = new model.Model(informForStart);
        var initView = new view.View(initModel.data);
        var startControl = new controller.Controller(initModel, initView);
    }
  );
