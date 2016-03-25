$(function(){
  init();
})

// function Item (behavior, display, order){
//   this.behavior = behavior
//   this.order    = order
//   this.display  = display
// }

// var randomItem = [new Item("click","red",1),new Item("dbclick","blue",2)]

// //Board Stetting function
//   $(function(){
//     $("#startButton").on("click",function(){
//       for (var i = 0; i<3; i++) {
//        var element = $("#li"+[Math.floor(Math.random()*24)]);
//        element.text("smashed");
//      }
//    });
//   })


// var dbclick = false;

// $("body").on("click", function(){
//   setTimeout(function(){
//     if (dbclick === false) {
//       console.log("single click ")
//     }
//   },200);
// }).on("dblclick", function(){
//   dbclick = true;
//   console.log("dblclick")
//   setTimeout(function(){
//     dbclick = false;
//   },300);
// });

// $('body').on('swipe', function(e){
//   console.log("HERE")
// });

var events = ["click", "dblclick"];

function init() {
  for (var i = 0; i < 4; i++) {
    addObject(i);
  }
}

function addObject(i) {
  var $container  = $(window);
  var randomEvent = events[Math.floor(Math.random()*events.length)]
  var randomWidth = Math.floor(Math.random()* $container.width());

  $("body").append("<div id='bubble_"+i+"'>"+randomEvent+"</div>");
  
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


