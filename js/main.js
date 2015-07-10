$(document).ready(function(){
 var allPits = [];
 for (var i = 0; i< 13; i++){
     allPits.push(document.getElementById(i));
 }


 var numstones =[0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4];
 (function init(){
  for(var i=0; i<allPits.length; i++) {
   allPits[i].innerText = numstones[i] ;
  }
})();

  console.log('activate framework!');


// This gets the players names to display the current players turn
var firstPlayerName = prompt("Lets Play Mancala! Player 1 enter your name", "name");
var secondPlayerName= prompt("Lets Play Mancala! Player 1 enter your name", "name");

//This stores the players inputed name//

var player1 = firstPlayerName;
var player2 = secondPlayerName;

// This displays the name of the current players turn//


//this determines which side belongs to each player//
var player1Side = $('#0, #1, #2, #3, #4, #5, #6');
var player2Side= $('#7, #8, #9, #10, #11, #12, #13');



// This code will initialize the board with number :-)


// Listens for click on a specific pit and calls the move function.
$(".pit").click(move);

function move(){
  console.log(this)
  // moveCount is equal to the number of stones in the pit clicked.
  var moveCount = parseInt(numstones[$(this).attr("id")]);
  // This resets the clicked pit to 0 in the DOM.
  $(this).text(0);
  // This resets the clicked pit in the array to 0.
  var index = parseInt($(this).attr("id"), 10);
  numstones[index] = 0;
//while stones in pit are >0 number of stones added to next pits will increase by 1, if 0
//pit will have value of 0//
  while (moveCount >= 0) {
    (function(moveCount){
        console.log(moveCount);
        console.log(index);
        //if id of pits is less than 13 value in pit will ncrease by 1//
        if(index < 13){
            index ++;
        //Otherwise loop runs once//
        }else {
            index = 0;
        }
        numstones[index] ++;
        //console.log(numstones[index]);
        allPits[index].innerText = numstones[index];
        //console.log($(allPits).text());
    })(moveCount);
    console.log(moveCount);
    moveCount --;
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
});
// function turn = function(player1,player2){
//   if(move === player1Side){
//     $(".current_player").text(player1)
//  }else{
//     $(".current_player").text(player2)
//    }




// function turn = function(player1,player2){
//   if(move === player1Side){
//     $(".current_player").text(player1)
//  }else{
//     $(".current_player").text(player2)
//    }
// };

// function play = function(move, turn, updateDisplay){

// };



// function updateDisplay(){
//   for(i=0; i<14; i++) {
//     var s = numstones[i] === 0 ? "0" : numstones[i];
//     $('#' + i).text(s);
//   }
// }

// updateDisplay();




// the next 4 pits have a starting value of 4, so the new value of the next 4 pits is 5

// var winner;
// function win (){
//   if (#0 > #7)
//     return winner player1
//   } else {
//   return winner player2
//   }
// }
//returns value of board//
// $(board).eq(1).text()
// "4"


