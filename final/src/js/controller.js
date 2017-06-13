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

          view.element.inputBtn.addEventListener('click', sendRequest);
          view.element.inputIdeas.addEventListener('keypress', function(e) {
            if (e.keyCode===13) {
              sendRequest();
            };
          });


          function sender(r) {
            var xhr = new XMLHttpRequest();                                                        //&image_type=photo
            xhr.open('GET', 'https://pixabay.com/api/?key=5553692-b6d8cb2b30635222df6f2566b&q='+r+'&min_width=700&lang=en+ru', true);
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
              that.load = 1;

              var timerViewRenderImg = setInterval(view.renderImg(model), 200);
              if (this.readyState === 4) {
                setTimeout(function() {
                  clearInterval(timerViewRenderImg);
                }, 2000);
              }
              // view.renderImg(model);
            }
          }

          function sendRequest(e) {
            // e.preventdefault();
            var textForm = view.element.inputIdeas.value;
            //API request:
            model.data.deleteBase();
            sender(textForm);
              // end API
              return e;
              //end click
            };
            //load img->>
            $(function() {
              var num = getRandomArbitrary(0,7);
              sender(model.data.requestImg[num]);
            });



            //masonry start->>

            // that.msnr = new Masonry(view.element.wrapper,{
            //   columnWidth: '100%',
            //   itemSelector: '.masonry'
            // })

            that.sendRequest=sendRequest();

            return this;
          },

      };
    }
  );
} catch (e) {
  console.log(e);
} finally {

}
