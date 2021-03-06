$(function(){

  var events          = ["click", "dblclick", "swipe"];
  var colors          = ["#FF4136","#7FDBFF","#001f3f"];
  var bubbleCounter   = 0;
  var points          = 0;
  var bubbleHeights   = [];
  var bubble          = document.getElementsByTagName("div");
  var fallSpeed       = 3000
  var poppingSpeed    = null
  var bubbleCohort    = []
  


  var moreBubble = function () {
    for (var i = 0; i < 2; i++) {
      addObject(bubbleCounter);
    }
    bubbleCounter++;
    if (fallSpeed > 300) {
      fallSpeed = fallSpeed-100
    } else {
      fallSpeed = 300
    }
  }

  poppingSpeed =  setInterval(function(){
    moreBubble();
    bubbleCohort.push(bubbleCounter-1)
  }, 2000);

  function addObject(bubbleCounter) {
    var randomGenerator = Math.floor((Math.random() * events.length));
    var $container      = $("main");
    var randomWidth     = Math.floor(Math.random()* $container.width());
    var $bubble         = $("#bubble_"+bubbleCounter);
    var dh              = $bubble.outerHeight();
    var dw              = $bubble.outerWidth();
    var xy              = $bubble.position();
    var randomEvent     = events[randomGenerator]
    var randomColor     = colors[randomGenerator]
    var bubbleText = "<div class='bubble' id='bubble_"+bubbleCounter+"'></div>";
    
    $($container).append(bubbleText);

   
    if (randomEvent === "swipe") {
      addSwipeEvent($bubble);
      console.log (randomEvent)
    } else if (randomEvent === "click") {
      $bubble.on("click",correct)
      console.log (randomEvent)
    } else if (randomEvent === "dblclick") {
      $bubble.on("dblclick",correct)
      console.log (randomEvent)
    }

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
            if(document.getElementById("bubble"+"_"+bubbleCounter).style.top < -15+"px"){
            clearInterval(poppingSpeed)
            console.log(bubbleCohort);
            $(bubbleCohort).each(function(index) {
              var bubbleName = "#bubble_" + bubbleCohort[index];
              $(bubbleName).fadeOut();
              console.log(bubbleCohort);
              document.getElementById("points").innerHTML = "LOSE";
              })
            }
          }
        });
      }
    }, 1000, function(){
      bubbleHeights.push();
    });
  }

  function correct(){
    $(this).fadeOut();
    document.getElementById("points").innerHTML = points;
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


//Swipe


function addSwipeEvent($bubble) {
  var touchstartX = 0;
  var touchendX = 0;
  var gesuredZone = bubble;
  $bubble.mousedown(mouseDown);
  $bubble.mouseup(mouseUp);

  function mouseDown() {
    touchstartX = event.screenX;
    console.log (touchstartX)
  }

  function mouseUp() {
    touchendX = event.screenX;
    console.log (touchendX)
    handleGesure(this);
  }

  function handleGesure(elem) {
    if (touchendX < touchstartX) {
      $(elem).remove();
      points++;
    }
    if (touchendX > touchstartX) {
      $(elem).remove();
      points++;
    }
  }
}


//Animate div


$(".movingDiv").animate({
  left  : '1000px',
  height: '100px',
  width : '100px'
},"slow");

$(".movingDiv").animate({
  top   : "300px",
},"slow");

$(".movingDiv").animate({
  left   : "200px",
},"slow");


$(".movingDiv").animate({
  height:'+=150px',
  width : '+=150px',
  padding :"+30px",
  fontSize : "+50px",
},"slow");


setTimeout(titleAnimation, 2300);

function titleAnimation (){

  $("#title").animate({
    width:"+250",
    fontSize : "+=45",
    opacity: "=+1"
  })
}

});









