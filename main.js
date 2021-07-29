var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "red";
var linewidth = 2;
var mouseevent = "empty";
var lastPositionX,lastPositionY;
canvas.addEventListener("mousedown",mousedown);

function mousedown(e){
    mouseevent = "mousedown";
    console.log(mouseevent);
}

canvas.addEventListener("mousemove",mousemove);

function mousemove(e){
    currentPositionX = e.clientX - canvas.offsetLeft;
    currentPositionY = e.clientY - canvas.offsetTop;
    console.log("current position of x ="+currentPositionX,"current position of y ="+currentPositionY);
    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.moveTo(lastPositionX,lastPositionY);
        ctx.lineTo(currentPositionX,currentPositionY);
        ctx.stroke()
    }
    lastPositionX = currentPositionX;
    lastPositionY = currentPositionY;
}

canvas.addEventListener("mouseup",mouseup);

function mouseup(e){
    mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave", mouseleave);

function mouseleave(e){
    mouseevent = "mouseleave";
}