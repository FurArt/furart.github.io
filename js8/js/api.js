'use strict'
var weatherDate = {
  city : 'Полтава ',
  id : 696643,
  ajaxDate: function(responseJSON) {
    this.name = responseJSON.name;
    this.id = responseJSON.id;
    this.cod = responseJSON.cod;

    $('#openweathermap-widget').children().remove();
    window.myWidgetParam = {
      id: 11,
      cityid: weatherDate.id,
      appid: '700de4cce14ba749fb91a374470c4734',
      units: 'metric',
      containerid: 'openweathermap-widget',
    };
    (function() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
    })();

  },
};

window.myWidgetParam = {
  id: 11,
  cityid: 696643,
  appid: '700de4cce14ba749fb91a374470c4734',
  units: 'metric',
  containerid: 'openweathermap-widget',
};
(function() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);
})();

$(function() {
  $('#openweathermap-widget-btn').on('click', function(e) {
      if (e.type === 'click') {
        weatherDate.city = $('.form-control').val();
        $.ajax({
          url:'//api.openweathermap.org/data/2.5/weather?q='+weatherDate.city+'&units=metric&callback=weatherDate.ajaxDate&APPID=700de4cce14ba749fb91a374470c4734',
          dataType: 'jsonp',
        });
      }
    }
  );
  $('.form-control').on('keydown', function(e) {
      if ((e.keyCode == 13) || (e.keyCode == 10) ) {
        weatherDate.city = $('.form-control').val();
        $.ajax({
          url:'//api.openweathermap.org/data/2.5/weather?q='+weatherDate.city+'&units=metric&callback=weatherDate.ajaxDate&APPID=700de4cce14ba749fb91a374470c4734',
          dataType: 'jsonp',
        });
      }
    }
  );
});





// if ()
//
