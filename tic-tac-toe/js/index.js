var box = $(".box");
box.text("");
var button = $("button");
var p = $("p");
var winScenarios = [
  [0, 1, 2], // first row across
  [3, 4, 5], // second ""
  [6, 7, 8], // third ""
  [0, 3, 6], // first column down
  [1, 4, 7], // second ""
  [2, 5, 8], // third ""
  [0, 4, 8], // diagonal from left
  [6, 4, 2]  // diagonal from right
];

var x = "X";
var o = "O";
var firstPlayer = true;
var secondPlayer = false;
var firstPlayerArray = [];
var secondPlayerArray = [];
box.on("click", function() {
  var currentIndex = box.index(this);
  if ($(this).text() === "") {
    if (firstPlayer) {
      $(box[currentIndex]).text(x);
      //firstPlayerScore += currentIndex;
      firstPlayerArray.push(currentIndex);
      
      firstPlayer = false;
      secondPlayer = true;
    } 
    else if (secondPlayer) {
      $(box[currentIndex]).text(o);
      secondPlayerArray.push(currentIndex);
      firstPlayer = true;
      secondPlayer = false;
    }
  } 
  else {
    return;
  }
 for (var i = 0; i < winScenarios.length; i++){

  if ($(firstPlayerArray).not(winScenarios[i]).length === 0 && $(winScenarios[i]).not(firstPlayerArray).length === 0) {
     gameEnd("FIRST PLAYER WINS YO")
   }
  else if ($(secondPlayerArray).not(winScenarios[i]).length === 0 && $(winScenarios[i]).not(secondPlayerArray).length === 0) {
     gameEnd("SECOND PLAYER WINS YO")
   }
  
}
  if (($(".box:contains('X')").length + $(".box:contains('O')").length) === 9) {
 gameEnd("DRAW");
  }
});
button.on("click", function(){
  $(this).removeClass("show");
  p.removeClass("show");
  box.removeClass("hide").text("");
  firstPlayer = true;
	secondPlayer = false;
	firstPlayerArray = [];
	secondPlayerArray = [];
});
function gameEnd(words) {
  
  box.addClass("hide");
  button.addClass("show")
  p.addClass("show").text(words);
}