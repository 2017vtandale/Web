var showbut = document.getElementById('submit');
var input = document.getElementById('thing');
var input = document.getElementById('pop');
showbut.addEventListener("click", function(){
  console.log("I made it)");
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var score = this.responseText/150.0;
        if(score>100){
          score= 100;
        }

        pop.innerHTML = score;
        console.log("I got the text");
      }
    }
    xhttp.open("GET", "https://vtandale-testapp.herokuapp.com/Lab-6/myphp.php?term="+input.value, true);
    xhttp.send();
},false);
