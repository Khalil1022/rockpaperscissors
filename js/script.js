// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("button").click(function(){
      $("#userChoice").text($("#input").val());

var randomNumber= Math.random();


if(randomNumber<.333){
    $("#computerChoice").html("Rock"); 
}
  else if(randomNumber>.333){
      $("#computerChoice").html("Paper");
      
  }

});
// DOCUMENT READY FUNCTION BELOW
