var showbut = document.getElementById("submit");
var input = document.getElementById("thing");
showbut.addEventListener("click", function(){
  console.log("I made it)");
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      console.log(this.readyState + " " + this.status)
      if (this.readyState == 4 && this.status == 200) {
        var val = this.responseText;
        if(val>100)
          val =100;
        document.getElementById('result').innerHTML = val;
        console.log("I got the text");
      }
    }
    xhttp.open("GET", "https://vtandale-testapp.herokuapp.com/Lab-6/myphp.php?term="+input.value, true);
    xhttp.send();
},false);
