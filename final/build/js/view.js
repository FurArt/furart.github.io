try{define("view",["lodash","documentReady","controller"],function(){return{View:function(e){console.log(e);var t=this;t.init=function(){$(function(){var e=document.querySelector("#wrapper-tmpl").innerHTML;document.querySelector(".container").innerHTML=e,t.writeCss()})},t.renderImg=function(e){var t=_.template(document.querySelector("#img-masonry").innerHTML),n={count:7,img:e.data.imgData};console.log(n),document.querySelector(".wrapper").innerHTML=t(n)},t.writeCss=function(){function e(e){return t.setAttribute("href",e),t.setAttribute("rel","stylesheet"),document.querySelector("head").appendChild(t)}var t=document.createElement("link"),n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;e(n<768?"css/style-mobile.css":n<=768||n<940?"css/style-table.css":"css/style-desktop.css")},window.addEventListener("orientationchange",function(){t.init(e)}),t.init(e),t.element={inputIdeas:document.querySelector(".ideas-input-form"),inputBtn:document.querySelector(".ideas-btn"),wrapper:document.querySelector(".wrapper"),masonryItem:document.querySelectorAll(".masonry"),masonryImg:document.querySelectorAll(".masonry-img"),slider:document.querySelector("#first-slider"),sliderSecond:document.querySelector("#second-slider"),sliderThird:document.querySelector("#third-slider")}}}})}catch(e){console.log(e)}finally{}