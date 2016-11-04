var input = document.getElementById('Ghost-Play');
var Player = 0;
var Playertext = document.getElementById('Player');
var Losingtext = document.getElementById('Losing-T');
var numw;
var oldcurrword="";
var currword="";
Playertext.value = "Player " + (Player + 1) + " turn";
Playertext.textContent = "Player " + (Player + 1) + " turn";

function Check() {
    var oldcurrword = currword;
    var currword = input.value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            numw = this.responseText;
            console.log(numw);
            console.log(parseInt(numw));
            //console.log(numw === "0");
            if (numw < 1) {
                console.log("L's");
                Losingtext.textContent = "Player " + (Player + 1) + " loses. The Game Restarts";
                input.value = "";
                input.textContent = "";
                Playertext.value = "Player " + ((1 - Player) + 1) + " turn.";
                Playertext.textContent = "Player " + ((1 - Player) + 1) + " turn.";
                Player = 1 - Player;
            } else {
                Player = 1 - Player;
                Losingtext.textContent = "";

                Playertext.value = "Player " + (Player + 1) + " turn";
                Playertext.textContent = "Player " + (Player + 1) + " turn";
            }
        }
    }
    xhttp.open("GET", "https://vtandale-testapp.herokuapp.com/Lab04/Ghost.php?query=" + currword, true);
    xhttp.send();

}

function isAlphabet(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            input.textContent = oldcurrword;
            input.value = oldcurrword;
            return false;
    } catch (err) {
        alert(err.Description);
    }
}
input.addEventListener("onkeydown", isAlphabet(event, this), false);
input.addEventListener("input", Check, false);
