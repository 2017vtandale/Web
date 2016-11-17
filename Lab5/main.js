var showbut = document.getElementById('shownew');
showbut.addEventListener("click", function(){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('tablestuff').innerhtml = this.responseText;
      }
    }
    xhttp.open("GET", "https://vtandale-testapp.herokuapp.com/Lab5/shownew.php", true);
    xhttp.send();
},false);
