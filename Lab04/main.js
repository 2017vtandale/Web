var input  = document.getElementById('Ghost-Play');
var Player = 0;
var Playertext = document.getElementById('Player');
var Losingtext = document.getElementById('Lose-T');
var numw;
Playertext.value = "Player "+ (Player+1)+" turn";
function Check(){
  var currword = input.value;
  //console.log(currword);
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          numw = this.responseText;
          //console.log(numw);
        }}
        xhttp.open("GET", "https://vtandale-testapp.herokuapp.com/Lab04/Ghost.php?query=" + currword, true);
        xhttp.send();
  console.log(numw==="0");
  if(numw<1){
    console.log("L's");
    Losingtext.value = "Thats not a word Player "+(Player+1)+" loses. The Game Restarts";
    input.value = "";
    input.textContent = "";
    Player = 0;
  }
  else{
  Player = 1-Player;
}
  Playertext.value = "Player "+ (Player+1)+" turn";
  Playertext.textContent = "Player "+ (Player+1)+" turn";

}
input.addEventListener("keyup", Check, false);
