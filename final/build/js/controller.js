try{define("controller",["lodash","documentReady"],function(){return{Controller:function(e,t){function n(e,t){return Math.floor(Math.random()*(t-e))+e}function o(n){var o=new XMLHttpRequest;o.open("GET","https://pixabay.com/api/?key=5553692-b6d8cb2b30635222df6f2566b&q="+n+"&image_type=photo&min_width=800&lang=en+ru",!0),o.send(),o.onreadystatechange=function(){if(4==this.readyState){if(200!=this.status)return void alert("ошибка: "+(this.status?this.statusText:"запрос не удался"));var n=JSON.parse(this.responseText);_.forEach(n.hits,function(t,n){e.data.addItem([t.webformatURL,t.tags])});var o=setInterval(t.renderImg(e),200);4===this.readyState&&setTimeout(function(){clearInterval(o)},2e3),console.log("baseImg ",n)}},console.log("model",e)}function a(n){var a=t.element.inputIdeas.value;return console.log("you input: ",a),e.data.deleteBase(),o(a),!1}console.log("model",e),console.log("view ",t),t.element.inputBtn.addEventListener("click",a),t.element.inputIdeas.addEventListener("keypress",function(e){13===e.keyCode&&a()}),$(function(){var t=n(0,7);o(e.data.requestImg[t]),console.log(e.data.requestImg[t])})}}})}catch(e){console.log(e)}finally{}