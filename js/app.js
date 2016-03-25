$(function(){
  init();
})


var events = ["click", "dblclick"];

function init() {
  $("#StartButton").on("click",function(){
    for (var i = 0; i < 4; i++) {
      addObject(i);
    }
  })
}

function addObject(i) {
  var $container  = $("main");
  var randomEvent = events[Math.floor(Math.random()*events.length)]
  var randomWidth = Math.floor(Math.random()* $container.width());

  $($container).append("<div id='bubble_"+i+"'>"+randomEvent+"</div>").clone();
  
  var $bubble = $("#bubble_"+i)
  $bubble.on(randomEvent, correct);
  
  var dh = $bubble.outerHeight();
  var dw = $bubble.outerWidth();

  $bubble.css({
    left: randomWidth,
    display: 'block'
  }).animate({
    top: $container.height() - dh,
    opacity: 1
  }, 3000);
}

function correct(){
  $(this).remove();
}

setInterval(function() {
  addObject()
}, 1000);
