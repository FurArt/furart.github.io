!function(t){t.fn.fCurusel=function(i){var n=t.extend({imgWidth:175,qauntImg:0,listWidth:0,qauntImgShow:3,fcarouselWidth:0,minimuSet:0,maksimumSet:0,positionCaunt:0,qauntImgAll:0},i);n.qauntImg=this.find(".fcarousel-element").length,n.listWidth=n.imgWidth*n.qauntImg,n.fcarouselWidth=n.qauntImgShow*n.imgWidth,n.maksimumSet=(n.qauntImg-n.qauntImgShow)*n.imgWidth;var e=this.children().children().children().children(".fcarousel-img");e.css({width:n.imgWidth+"px"}),e.parents(".fcarousel").css({width:n.fcarouselWidth+"px"}),e.parents(".fcarousel-list").css({width:n.listWidth+"px"}),this.find(".fcarousel-control-prev").on("click",function(){n.positionCaunt!=n.minimuSet&&(n.positionCaunt=n.positionCaunt+10+n.imgWidth,e.parents(".fcarousel-list").animate({left:n.positionCaunt+"px"}))}),this.find(".fcarousel-control-next").on("click",function(){-n.positionCaunt!=n.maksimumSet&&(n.positionCaunt=n.positionCaunt-n.imgWidth-10,e.parents(".fcarousel-list").animate({left:n.positionCaunt+"px"}))}),n.qauntImgAll=this.find(".fcarousel-element").length;for(var a=0;a<n.qauntImgAll;a++)this.find(".fcarousel-panel").append("<li class='fcarousel-btn'><a href='"+a+"'></li>");return this.find(".fcarousel-btn").length>0&&t(this.find(".fcarousel-btn")[0]).find("a").addClass("active-btn"),t(this.find(".fcarousel-btn")).find("a").click(function(i){i.preventDefault();var a=t(this).attr("href"),s=-(n.imgWidth*a);e.parents(".fcarousel-list").animate({left:s+"px"}),console.log(),t(".active-btn").removeClass("active-btn"),t(this).addClass("active-btn")}),this}}(jQuery),$(function(){$(".fcarousel-wrapper").fCurusel({qauntImgShow:1,imgWidth:1160})});try{$(function(){var t=$(".panel-container-element");t.click(function(t){t.preventDefault(),$(this).hasClass("active_panel-container-element")?($(this).removeClass("active_panel-container-element"),$($($(this).find("a")).attr("href")).removeClass("active-panel-content")):($(this).addClass("active_panel-container-element"),$($($(this).find("a")).attr("href")).addClass("active-panel-content"))})})}catch(e){console.log(e)}finally{}