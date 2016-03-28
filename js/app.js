$(function(){
  init();
});

var events        = ["click", "dblclick"];
var colors        = ["#FF4136","#7FDBFF","#001f3f","#85144b","#DDDDDD"];
var bubbleCounter = 0;
var points        = 0;
var bubbleHeights = [];
var bubble        = document.getElementsByTagName("div");
var fallSpeed     = 2000

function init() {
  $("#newGame").on("click",function(){
    for (var i = 0; i < bubble.length; i++) {
      bubble[i].remove();
    }
  });
}



function moreBubble() {
  for (var i = 0; i < 2; i++) {
    addObject(bubbleCounter);
  }
  bubbleCounter++;
  if (fallSpeed > 300) {fallSpeed = fallSpeed-200
  } else {
    fallSpeed = 250
  }
}

setInterval(function(){
  moreBubble();
}, 2000);

function addObject(bubbleCounter) {
  var $container  = $("main");
  var randomEvent = events[Math.floor(Math.random()*events.length)];
  var randomWidth = Math.floor(Math.random()* $container.width());
  var $bubble     = $("#bubble_"+bubbleCounter);
  var dh          = $bubble.outerHeight();
  var dw          = $bubble.outerWidth();
  var xy          = $bubble.position();
  var randomColor = colors[Math.floor(Math.random()*colors.length)]

  var bubbleText = "<div class='bubble' id='bubble_"+bubbleCounter+"'></div>";
  $($container).append(bubbleText);

  $bubble.on(randomEvent, correct);

  $bubble.css({
    left: randomWidth,
    display: 'block',
    backgroundColor: randomColor
  }).animate({
    top: $container.height() - dh,
    opacity: 1
  }, {
    duration: fallSpeed,
    step: function(currentLeft){
      $(".bubble:not(#bubble_"+bubbleCounter+")").each(function(index, bubble){
        if (collision($bubble, $(bubble))) {
          $bubble.stop();
          if(document.getElementById("bubble"+"_"+bubbleCounter).style.top < 100+"px"){
            alert ("You Lose")
          }
        }
      });
    }
  }, 3000, function(){
    bubbleHeights.push();
  });
}

function correct(){
  document.getElementById("points").innerHTML = points;
  $(this).fadeOut();
  points++;
}

function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}




