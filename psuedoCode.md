<!-- //psuedo code for move logic user story 1// -->
As a creator I want to create an object that will hold the
numerical values of each pit on the board. So that the addition
and subtraction of stones can stay accounted for.

`var value= {
  "#a":0,
  "#1":4,
  "#2":4,
  "#3":4,
  "#4":4,
  "#5":4,
  "#6":4,
  "#7":4,
  "#8":4,
  "#9":4,
  "#10":4,
  "#11":4,
  "#12":4,
  "#b":0
};`


or

var boardValue=[[4,4,4,4,4,4,0],
              [4,4,4,4,4,4,0]];


1. check html value
2. store html value


<!-- psuedo code for turn logic user story 1 -->
##Turn Logic
- As a creator I want the game to be able to determine if a pit has a numeric
value of 0 or some other numeric value so that it can determine whether
a players turn has ended or will continue.

var empty= 0;

<!-- //psuedo code for move logic user story 2// -->
- As a creator I want to be able to add and subtract numerical values
from pits #1-12 to coincide with how many stones are being placed into
each pit. Pits #1-12 all start with a value of 4.
I only want to add numerical values to pit #a and #b to keep the total
number of stones in pits #a and #b for the purpose of win logic.

value of pits= i
i>0; board.length; i+

(computerPlayer)
<!-- //order of board based on placement of pits. clockwise
  pit#10 will always be chosen first. base value of all pits with number id
   is 4// -->
"Beginning values of all pits before any moves"
#7=  4
#8=  4
#9=  4
#10= 4
#11= 4
#12= 4
#b=  0
#6=  4
#5=  4
#4=  4
#3=  4
#2=  4
#1=  4
#a=  0

"Computer moves; pit#10, #b belongs to computer"

#7=  4 -> 4
#8=  4 -> 4
#9=  4 -> 4
#10= 4 -> 0
#11= 4 -> 5
#12= 4 -> 5
#b=  0 -> 1
#6=  4 -> 5
#5=  4 -> 5
#4=  4 -> 4
#3=  4 -> 4
#2=  4 -> 4
#1=  4 -> 4
#a=  0 -> 0

"still computers move last stone was dropped in #5
which is on players side but the pit had an original value
of 4 which is more than 0 so computer picks up original value
of 4 and adds 1 from the original stones of #10 totaling 5 stones
to be dropped in 5 more pits"

#7=  4 -> 5
#8=  4 -> 4
#9=  4 -> 4
#10= 0 -> 0
#11= 5 -> 5
#12= 5 -> 5
#b=  1 -> 1
#6=  5 -> 5
#5=  5 -> 0
#4=  4 -> 5
#3=  4 -> 5
#2=  4 -> 5
#1=  4 -> 5
#a=  0 -> 0

<!-- //#a remained at 0 while value of #7 increased by 1 because
it is still computers move and #a belongs to the player
computer can not add any stones to players container move is
illegal. -->

"still computers move last stone was dropped in #7
which is on computers side. computer will take 5 stones
and add 1 to the next 5 pits"

#7=  5 -> 0
#8=  4 -> 5
#9=  4 -> 5
#10= 0 -> 1
#11= 5 -> 6
#12= 5 -> 6
#b=  1 -> 2
#6=  5 ->
#5=  0 ->
#4=  5 ->
#3=  5 ->
#2=  5 ->
#1=  5 ->
#a=  0 ->

<!-- //last stone was dropped in computers pit #b
so computer gets a new turn// -->

"computers 2nd turn, begins with #12"
#7=  0 ->
#8=  5 ->
#9=  5 ->
#10= 1 ->
#11= 6 ->
#12= 6 ->
#b=  2 ->
#6=  5 ->
#5=  0 ->
#4=  5 ->
#3=  5 ->
#2=  5 ->
#1=  5 ->
#a=  0 ->





var board = $('.pit, .large_pit');
//this determines which side belongs to each player//
var player1Side = $('#0, #1, #2, #3, #4, #5, #6');
var player2Side= $('#7, #8, #9, #10, #11, #12, #13');

//
var numstones =[0,4,4,4,4,4,4,4,4,4,4,4,4,0];

var allPits = document.querySelectorAll(".pits");

// This code will initialize the board with number :-)
(function init(){
  for(var i=0; i<allPits.length; i++) {
   allPits[i].innerHTML = numstones[i] ;
  }
})();

// Listens for click on a specific pit and calls the move function.
$(".pit").click(move);

function move(){
  // moveCount is equal to the number of stones in the pit clicked.
  var moveCount = numstones[$(this).attr("id")];
  // This resets the clicked pit to 0 in the DOM.
  $(this).text(0);
  // This resets the clicked pit in the array to 0.
  numstones[$(this).attr("id")] = 0;

  var index = $(this).attr("id");
  for(var i = moveCount; moveCount >0; i--){
    numstones[index]++;
    var value = numstones[index];
    var new_value = value ++;
    allPits[i].innerHTML = new_value;
    if(moveCount === 0)
      break;
    console.log($(allPits).text());


  }

}

var moveCount = function(numstones){
  numstones[$(this).attr("id")];
}

///this animates the page//

$(".left").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});

$(".right").hover(function(){
    $(this).css("background-color", "red");
    }, function(){
    $(this).css("background-color", "green");
});


$(".large_pitb").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "green");
});

$(".large_pita").hover(function(){
    $(this).css("background-color", "blue");
    }, function(){
    $(this).css("background-color", "pink");
});

$(".footer").hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "gray");
});



$("h1").click(function(){
    var div = $("h1");
    div.animate({left: '100px'}, "slow");
    div.animate({height: '50px', opacity: '0.4'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
});


$("h2").click(function(){
    var div = $("h2");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '300px', opacity: '0.4'}, "slow");



});




