var showbut = document.getElementById("submit");
showbut.addEventListener("click", function(){
  console.log("I made it)");
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('tablestuff').innerHTML = this.responseText;
        console.log("I got the text");
      }
    }
    xhttp.open("GET", "https://vtandale-testapp.herokuapp.com/Lab5/shownew.php", true);
    xhttp.send();
},false);
