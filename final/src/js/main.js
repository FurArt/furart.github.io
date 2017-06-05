  require.config({
    paths:{
      'lodash' :  'lodash.min',
    },
    shim: {
      'lodash' : {
        exports : 'lodash'
      }
    }
  });


  require(
    [
      'lodash',
      'model',
      'view',
      'controller'
    ],
    function(_, model, view, controller) {

        var informForStart = ['Тут могла быть ваша реклама', 'Тут могла быть ваша реклама', 'Тут могла быть ваша реклама', 'Тут могла быть ваша реклама','Тут могла быть ваша реклама','Тут могла быть ваша реклама','Тут могла быть ваша реклама']
        var initModel = new model.Model(informForStart);
        var initView = new view.View(initModel.data);
        var startControl = new controller.Controller(initModel, initView);
        console.log("DOM fully loaded and parsed");

    }
  );
