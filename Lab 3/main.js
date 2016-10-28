var timer = moment("00:03", "mm:ss");
var list = document.getElementById("autocomplete");
var checked = false;

function typing() {
    timer = moment("00:03", "mm:ss");
    checked = false;
    while (list.firstChild) {
    list.removeChild(list.firstChild);
}
}
function updateTimer() {
    //console.log("Timerout");
    timer.subtract(1, 'seconds');
    //console.log(timer.second());
    if (timer.second() == 0) {
        console.log("Timer out");
        Check();
    }
}

function Check() {
    if(input.value.length>0){
    var maxsearch = 4;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var queries = this.responseText.split(" ");
            console.log(queries)
            if (!checked) {
                for (var i = 1; i < maxsearch + 1; i++) {
                    if(i<queries.length){
                    var el = document.createElement("li");
                    el.textContent = queries[i];
                    el.value = queries[i];
                    el.className = "possible";
                    list.appendChild(el);
                    checked = true;
                }
            }
            }
        }
    }
    xhttp.open("GET", "https://tmrudwick-web.herokuapp.com/SearchQuery/search.php?query=" + input.value, true);
    xhttp.send();
    //timer = moment("00:03", "mm:ss");
}}

var input = document.getElementById("queryInput");
input.addEventListener("keydown", typing, false);
var timerinterval = setInterval(updateTimer, 1000);
