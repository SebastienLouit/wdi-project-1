$(function(){

  // var $randomBox = $("li").indexOf([Math.floor(Math.random()*24)])
 
 
  $(function(){
    $("#startButton").on("click",function(){
      var element = $("#li"+[Math.floor(Math.random()*24)]);
      element.hide("slow",function(){
        setTimeout(function(){
          element.show();
        },1000)
      });
    });
  })
          


})







