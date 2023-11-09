const states = [
"", 
">:(",
"<:(",
">:O",
">:)"
];

var time = Date.now();
var d_time = time;
var state = 0;
var x = 0;
var y = 0;
var vx = 0;
var vy = 0;
const button = document.createElement("button");
button.style.bottom = "calc(50vh - 50px)";
button.style.left = "calc(50vw - 50px)";

button.addEventListener("click", click);
button.addEventListener("mouseover", moveOutOfWay);
window.addEventListener("resize", resize);
document.getElementById("buttonsText").addEventListener("select", select)
document.addEventListener("keydown", noKeyboard);
button.addEventListener("dblclick", doubleClick);
document.addEventListener("wheel", wheel);
document.getElementById("paste").addEventListener("paste", paste)
document.addEventListener("mousedown", missed);
button.addEventListener("load",hooray)

document.body.appendChild(button);

setInterval(returnState, 1000)
setInterval(move, 10)

function hooray(){
    button.innerHTML = "I LOADED!";
}

function missed(){
    button.innerHTML = "HA HA YOU MISSED!";
    state = 4;
}

function paste(){
    button.innerHTML = "WHAT HAVE YOU DONE <:O";
    state = 3;
}

function wheel(){
    button.innerHTML = "No scrolly scrolly";
}

function doubleClick(){
    button.innerHTML = "DON'T SPAM... please >:(";
}

function noKeyboard (){
    state = 4;
    button.innerHTML = "HAHAHA NO KEYBOARD... wait";
}

function moveOutOfWay() {
    vx = (Math.random() - 0.5) * 5;
    vy = (Math.random() - 0.5) * 5;

}

function move(){

    if(Math.abs(x + vx) + 52 > visualViewport.width / 2){
        vx = -vx;
    }
    if(Math.abs(y + vy) + 52 > visualViewport.height / 2){
        vy = -vy;
    }
    y += vy;
    x += vx;
    button.style.bottom = `calc(50vh - 50px + ${y}px)`;
    button.style.left = `calc(50vw - 50px + ${x}px)`;
}

function resize(){
    button.innerHTML = "STOP ADJUSTING THINGS";
    button.style.backgroundColor = "green";
    state = 2;
}

function click(){

    button.innerHTML = "HOW DID YOU CLICK ME?";
    button.style.backgroundColor = "grey"
    time = Date.now();
    d_time = time;
    state = 1;

}

function select(){
    button.innerHTML = "PLEASE DON'T TOUCH MY TEXT!"
    state = 3;
    button.style.backgroundColor = "blue"
}

function returnState(){
    button.innerHTML = states[state];
}