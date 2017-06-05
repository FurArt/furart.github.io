try {
  define(
    'controller',
    ['lodash', 'documentReady'],
    function( ) {
      return {
        Controller : function (model, view) {
          var that = this;

          function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
          }; //random

          console.log('model', model);
          console.log('view ', view);
          view.element.inputBtn.addEventListener('click', sendRequest);
          function sender(r) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://pixabay.com/api/?key=5553692-b6d8cb2b30635222df6f2566b&q='+r+'&image_type=photo&min_width=320&lang=en+ru', true);
            xhr.send();
            xhr.onreadystatechange = function() {
              if (this.readyState != 4) return;
              if (this.status != 200) {
                // обработать ошибку
                alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                return;
              }
              var baseImg = JSON.parse(this.responseText);
              _.forEach(baseImg.hits, function(value, key) {
                model.data.addItem([value.webformatURL, value.tags]);
              });
              view.renderImg(model);
              console.log('baseImg ', baseImg);
            }
            console.log('model', model);
          }

          function sendRequest(e) {
            var textForm = view.element.inputIdeas.value;
            console.log('you input: ', textForm);
            //API request:
            model.data.deleteBase();
            sender(textForm);
              // end API
              return false;
              //end click
            };
            //load img->>
            $(function() {
              var num = getRandomArbitrary(0,7);
              sender(model.data.requestImg[num]);
            });

          },
      };
    }
  );
} catch (e) {
  console.log(e);
} finally {

}
