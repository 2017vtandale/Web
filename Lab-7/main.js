var dots = [];
var canvas = document.getElementById('myCanvas')
var currkey = false;
var ctx = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height,
    x1,
    y1,
    isDown = false;
    ctx.translate(0.5, 0.5);
canvas.onmousedown = function(e) {
    console.log(currkey)
    var rect = canvas.getBoundingClientRect();
    x1 = e.clientX - rect.left;
    y1 = e.clientY - rect.top;
    dots.push(y1*h + x1)
    ctx.beginPath();
    ctx.arc(x1, y1, 5, 0, 2 * Math.PI, false);
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill();
    isDown = true;
}
canvas.onmouseup = function() {
    isDown = false;
}
canvas.onmousemove = function(e) {

}
window.onkeydown = function(e){
    currkey = true;

}
canvas.onkeyup = function(e){
    currkey = false;
}


var btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",function(){
    ctx.clearRect(0, 0, w, h);
},false)
