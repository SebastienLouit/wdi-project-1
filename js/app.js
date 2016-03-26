$(function(){
  init();
})


var events        = ["click", "dblclick"];
var bubbleCounter = 0




function init() {
  $("#StartButton").on("click",function(){
    for (var i = 0; i < 2; i++) {
      addObject(bubbleCounter)
    }
    bubbleCounter++
  })
}

function moreBubble() {
  for (var i = 0; i < 2; i++) {
  addObject(bubbleCounter)
}
  bubbleCounter++
}


setInterval(function(){ 
  moreBubble();}, 1000);


function addObject(bubbleCounter) {
  var $container  = $("main");
  var randomEvent = events[Math.floor(Math.random()*events.length)]
  var randomWidth = Math.floor(Math.random()* $container.width());
  var $bubble = $("#bubble_"+bubbleCounter)
  $bubble.on(randomEvent, correct);
  var dh = $bubble.outerHeight();
  var dw = $bubble.outerWidth();

  $($container).append("<div id='bubble_"+bubbleCounter+"'>"+randomEvent+"</div>");

  $bubble.css({
    left: randomWidth,
    display: 'block'
  }).animate({
    top: $container.height() - dh,
    opacity: 1
  }, 3000);
}



function correct(){
  var points = 0
  $(this).remove();
  points++
  document.getElementById("points").innerHTML = points;
}


////WORKING AREA ///

// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.height + rect1.y > rect2.y) {
//     // collision detected!
// }

