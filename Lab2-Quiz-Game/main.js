/****Setup*****/
var Pokemon = [
    ["Passimian", "http://www.pokemon-sunmoon.com/media/uploads/sept_20_assets/passimian.png"],
    ["Oranguru", "http://www.pokemon-sunmoon.com/media/uploads/sept_20_assets/oranguru.png"],
    ["Lycanroc", "http://www.pokemon-sunmoon.com/media/uploads/sept_20_assets/lycanroc_midnight_form.png"],
    ["Salandit", "http://www.pokemon-sunmoon.com/media/uploads/july_7_assets/lizard.png"],
    ["Vikavolt", "http://www.pokemon-sunmoon.com/media/uploads/july_01_assets/vikavolt.png"],
    ["Mimikyu", "http://www.pokemon-sunmoon.com/media/uploads/july_19_assets/ghost.png"],
    ["Sandshrew", "http://www.pokemon-sunmoon.com/media/uploads/aug_1_assets/a-sandshrew.png"],
    ["Ninetales", "http://www.pokemon-sunmoon.com/media/uploads/aug_1_assets/a-ninetales.png"],
];
var pokeElements = new Array(Pokemon.length);
var pokeEntered = {};
var colsize = 4;
var rowsize = (Pokemon.length / colsize);
var el;
var score = 0;
var started = true;
/****Setup*****/
/****Timer*****/
var time = document.getElementById('Timer');
var currtimer = moment("02:00", "mm:ss");
time.textContent = currtimer.format("mm:ss");
time.value = currtimer.format("mm:ss");

function updateTimer() {
    if(started){
    currtimer.subtract(1, 'seconds');
    time.textContent = currtimer.format("mm:ss");
    time.value = currtimer.format("mm:ss");
}

if(currtimer.second()==0 && currtimer.minute()==0){
    Stop();
}
}
var timerinterval = setInterval(updateTimer, 1000);
/****Timer****/
/****Quiz*****/
function checkifCorrect() {
    name = this.id;
    if (this.value.toUpperCase() === name.toUpperCase()&&!pokeEntered[name]) {
        score+=1;
        this.parentElement.lastChild.style.visibility = 'initial';
        pokeEntered[name]=true;
        document.getElementById("Score").textContent = "Curr Score: "+score;
        if(score==Pokemon.length)
            Stop();
    }
}

var elr;
var elc;
var table = document.getElementById('Table');
var index = 0;

for (var i = 0; i < rowsize; i++) {
    elr = document.createElement('tr');
    table.appendChild(elr);
    for (var j = 0; j < colsize; j++) {
        index = i * colsize + j;
        if (index < Pokemon.length) {

            /***PokeImg***/
            elc = document.createElement('th');
            el = document.createElement('img');
            el.src = Pokemon[index][1];
            elc.appendChild(el);
            /***PokeImg***/

            /***Input***/
            el = document.createElement('input');
            el.type = "text";
            el.id = Pokemon[index][0];
            el.addEventListener('change', checkifCorrect,false);
            elc.appendChild(el);
            pokeElements[index] = el;
            pokeEntered[el.id]= false;
            /***Input***/

            /***Check***/
            el = document.createElement('img');
            el.src = "checkmark.png";
            el.id = "check";
            el.style.visibility = "hidden";
            /***Check***/
            elc.appendChild(el);
            elr.appendChild(elc);
        }
    }
}
/************Buttons***************/
var startbut = document.getElementById('Start');
var pausebut = document.getElementById('Pause');
var stopbut = document.getElementById('Stop');
var unpausebut = document.getElementById('Unpause');

function Startpress(){
    for(var i =0;i<pokeElements.length;i++){
        pokeElements[i].value = "";
        pokeElements[i].parentElement.lastChild.style.visibility = 'hidden';
        pokeEntered[pokeElements[i].id]= false;
        pokeElements[i].disabled = false;
        score = 0;
        document.getElementById("Score").textContent = "Curr Score: 0";
        currtimer = moment("02:00", "mm:ss");
        started = true;
    }
}
function Pausepress(){
    started = false;
    for(var i =0;i<pokeElements.length;i++){
        pokeElements[i].disabled = true;
    }
}
function Unpausepress(){
    started = true;
    for(var i =0;i<pokeElements.length;i++){
        pokeElements[i].disabled = false;
    }
}
function Stop(){
    started = false;
    currtimer = moment("0:00","mm:ss");
    time.textContent = currtimer.format("mm:ss");
    time.value = currtimer.format("mm:ss");
    for(var i =0;i<pokeElements.length;i++){
        pokeElements[i].disabled = true;
    }
}
startbut.addEventListener("click",Startpress,false);
pausebut.addEventListener("click",Pausepress,false);
unpausebut.addEventListener("click",Unpausepress,false);
stopbut.addEventListener("click",Stop,false);
