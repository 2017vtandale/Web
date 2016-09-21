var options = ['Tacobell','McDonalds','Wendy','BurgerKing','KFC'];
var secondOptions = [
  ['Cheesy Crunchy Core','Shredded Chicken Burrito','Burrito Supreme','Triple Double Crunch Wrap'],
  ['McChicken','10pc Chicken Nuggets','Cinnamon Melts','Egg and Cheese McMuffin'],
  ['10pc Chicken Nuggets','Spicy Chicken','Small Frosty','Natural Cut Fries'],
  ['Spicy Chicken Sandwich','Chicken Fries','Onion Rings','Big Fish Sandwich'],
  ['Popcorn Nuggets','Mashed Potatos','4pc Grilled Chicken','5$ Fill Up']
];
/***********Drop DownSection************************/
var Dropdown = document.getElementById('selectType');
var SecondOptionDrop = document.getElementById('ConcequenceType');
for(var i =0; i<options.length;i++){
  var el = document.createElement("option");
  el.textContent = options[i];
  el.value = options[i];
  Dropdown.appendChild(el);
}
for(i = 0;i<secondOptions[0].length;i++){
  el = document.createElement("option");
  el.textContent = secondOptions[0][i];
  el.value = secondOptions[0][i];
  SecondOptionDrop.appendChild(el);

}
function changeSecond(x){
  var els = SecondOptionDrop.children;
  for(i = 0;i<secondOptions[x].length;i++){
    els[i].textContent = secondOptions[x][i];
    els[i].value = secondOptions[x][i];
  }
}
function logValue(){
  switch(Dropdown.value){
    case 'Tacobell':
    changeSecond(0);
    break;
    case 'McDonalds':
    changeSecond(1);
    break;
    case 'Wendy':
    changeSecond(2);
    break;
    case 'BurgerKing':
    changeSecond(3);
    break;
    case 'KFC':
    changeSecond(4);
    break;

  }
}
Dropdown.addEventListener('change',logValue,false);
/***********Drop DownSection************************/
/***********List Section****************************/
var ListView = document.getElementById('selectListType');
var SecondOptionList = document.getElementById('ConcequenceListType');
ListView.size = options.length;
for(i = 0; i<options.length;i++){
  //console.log("we made it");
  el = document.createElement("option");
  el.textContent = options[i];
  el.value = options[i];
  if(i==0)
    el.setAttribute('selected',true);
  ListView.appendChild(el);

}

SecondOptionList.size = secondOptions[0].length;
for(i = 0;i<secondOptions[0].length;i++){
  //console.log("We made it");
  el = document.createElement("option");
  el.textContent = secondOptions[0][i];
  el.value = secondOptions[0][i]
  SecondOptionList.appendChild(el);
}

function changeSecondList(x){
  var els = SecondOptionList.children;
  for(i = 0;i<secondOptions[x].length;i++){
    els[i].textContent = secondOptions[x][i];
    els[i].value = secondOptions[x][i];
  }
}
function logValueList(){
  switch(ListView.value){
    case 'Tacobell':
    changeSecondList(0);
    break;
    case 'McDonalds':
    changeSecondList(1);
    break;
    case 'Wendy':
    changeSecondList(2);
    break;
    case 'BurgerKing':
    changeSecondList(3);
    break;
    case 'KFC':
    changeSecondList(4);
    break;

  }
}

ListView.addEventListener('change',logValueList,false);
/***********List Section****************************/
/***********General Section*************************/
var RadioBox = document.getElementById('RadioBox');
var Dropbutton = document.getElementById('Dropped');
var Listbut = document.getElementById('Listbut');
ListView.style.display = 'none';
SecondOptionList.style.display = 'none';

function Change()
{
  if(Dropbutton.checked){
    ListView.style.display = 'none';
    SecondOptionList.style.display = 'none';
    Dropdown.style.display = 'initial';
    SecondOptionDrop.style.display = 'initial';
  } else {
    ListView.style.display = 'initial';
    SecondOptionList.style.display = 'initial';
    Dropdown.style.display = 'none';
    SecondOptionDrop.style.display = 'none';
  }
}
Dropbutton.addEventListener('change',Change,false);
Listbut.addEventListener('change',Change,false);
