require.config({
  paths:{
    'lodash' :  'lodash.min',
    'jquery' : 'jquery.min'
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
    'jquery',
    'model',
    'view',
    'controller'
  ],
  function(_, $, model, view, controller) {
    var informForStart = ['asdfasdf', 'asdfasdf', 'asdfadsf', 'asdfas','asda','фывафывафывафыв','some think']
    var initModel = new model.Model(informForStart);
    var initView = new view.View(initModel.data);
    var startControl = new controller.Controller(initModel, initView);
    // view.View(model.Model().data);
    // console.log(model.Model().data);

  }
);
