require.config({paths:{lodash:"lodash.min",documentReady:"jquery.documentReady",masonry:"masonry.pkgd.min",lory:"lory.min",imagesloaded:"//cdnjs.cloudflare.com/ajax/libs/jquery.imagesloaded/3.2.0/imagesloaded.pkgd"},shim:{lodash:{exports:"lodash"},documentReady:{exports:"documentReady"},masonry:{exports:"masonry"},lory:{exports:"lory"},imagesloaded:{exports:"imagesloaded"}}}),require(["lodash","documentReady","imagesloaded","masonry","lory","model","view","controller"],function(e,o,l,n,r,a,d,i){function t(){if(1===c.load){var e=new n(y.element.wrapper,{columnWidth:300,itemSelector:".masonry",gutter:20});c.load=0,console.log("done!",e)}else console.log("load"),clearInterval(u)}var s=["яблуко","апельсин","абрикос","машина","вишня","слива","груша"],m=new a.Model(s),y=new d.View(m.data),c=new i.Controller(m,y),u=setInterval(t,200);try{}catch(g){console.log(g)}finally{}y.element.wrapper.style.height="auto",r.lory(y.element.slider,{rewind:!0,infinite:1}),r.lory(y.element.sliderSecond,{rewind:!0,infinite:1}),r.lory(y.element.sliderThird,{rewind:!0,infinite:1})});