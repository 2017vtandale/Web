
var square = document.getElementById('changed');
var input = document.getElementById('colors');
var listener = document.getElementById('changer').addEventListener("click",function(){
	console.log(input.textContent)
	square.style.backgroundColor = input.value;
},false)
