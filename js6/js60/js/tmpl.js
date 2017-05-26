// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

var dataHTML = {
  htmlTag:[
    {
      name: "Фургас Артем Васильович",
      fotoProfile: "img/me.jpg",
      expirence:"Менеджер с продаж автомобилей, маркетолог, администратор сайта."
    },
    {
      forWhat:"Хочу учить фронтенд, потому что:",
      dream: [{why:"Детская мечта"},
              {why:"Мне это интересней"},
              {why:"Потенциально тут возможно заработать больше"},
              {why:"Потенциально тут возможно заработать больше"},
              {why:"Потенциально тут возможно заработать больше"},
              {why:"Потенциально тут возможно заработать больше"},
            ],
    },
    {
      contacts:[
        {
          header:"Мой контактный телефон:",
          info:"+380990242922",
        },
        {
          header:"Мой профиль Вконтакте:",
          info:"<a href='https://www.facebook.com/iiionerart' target='_blank'>Артем Фургас</a>",
        },
        {
          header:"Мой фидбек:",
          info:"C нетерпением жду следующих модулей",
        },
      ]
    },
  ]
}

$(function() {
  var $resume = $('#resume').html();
  var $autoContent = tmpl($resume,dataHTML);
  $($(".row")[1]).append($autoContent);

});
