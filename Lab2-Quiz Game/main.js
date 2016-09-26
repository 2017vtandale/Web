/****Setup*****/
var Pokemon = [
  ["Passimian","http://www.pokemon-sunmoon.com/media/uploads/sept_20_assets/passimian.png"],
  ["Oranguru","http://www.pokemon-sunmoon.com/media/uploads/sept_20_assets/oranguru.png"],
  ["Lycanroc","http://www.pokemon-sunmoon.com/media/uploads/sept_20_assets/lycanroc_midnight_form.png"],
  ["Salandit","http://www.pokemon-sunmoon.com/media/uploads/july_7_assets/lizard.png"],
  ["Vikavolt","http://www.pokemon-sunmoon.com/media/uploads/july_01_assets/vikavolt.png"],
  ["Mimikyu","http://www.pokemon-sunmoon.com/media/uploads/july_19_assets/ghost.png"],
  ["Sandshrew","http://www.pokemon-sunmoon.com/media/uploads/aug_1_assets/a-sandshrew.png"],
  ["Ninetales","http://www.pokemon-sunmoon.com/media/uploads/aug_1_assets/a-ninetales.png"],
];
var colsize = 4;
var rowsize = (Pokemon.length/colsize);
var el;
/****Setup*****/
/****Timer*****/
var time = document.getElementById('Timer');
var currtimer = moment("05:00","mm:ss");
time.textContent = currtimer.format("mm:ss");
time.value = currtimer.format("mm:ss");
function updateTimer(){
  currtimer.subtract(1,'seconds');
  time.textContent = currtimer.format("mm:ss");
  time.value = currtimer.format("mm:ss");
}
setInterval(updateTimer,1000);
/****Timer****/
/****Quiz*****/
function checkifCorrect(name,element){
  console.log(name);
  if(element.textContent===name){
    console.log("lit");
  }
}
var elr;
var elc;
var table = document.getElementById('Table');
var index = 0;
var pokelements = new Array(Pokemon.length);
for(var i = 0;i<rowsize;i++){
  elr = document.createElement('tr');
  table.appendChild(elr);
  for(var j = 0;j<colsize;j++){
    index = i*colsize+j;
    //console.log(Pokemon[index][0]);
    if(index<Pokemon.length){
    elc = document.createElement('th');
    el = document.createElement('img');
    el.src = Pokemon[index][1];
    elc.appendChild(el);
    el = document.createElement('input');
    el.type = "text";
    el.addEventListener('change',checkifCorrect(Pokemon[index][0],el),false);
    elc.appendChild(el);
    elr.appendChild(elc);
  }
  }
}
