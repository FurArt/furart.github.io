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
        var informForStart = ['Тут могла быть ваша реклама', 'Тут могла быть ваша реклама', 'Тут могла быть ваша реклама', 'Тут могла быть ваша реклама','Тут могла быть ваша реклама','Тут могла быть ваша реклама','Тут могла быть ваша реклама']
        console.log(informForStart);
        var initModel = new model.Model(informForStart);
        var initView = new view.View(initModel.data);
        var startControl = new controller.Controller(initModel, initView);
    }
  );
