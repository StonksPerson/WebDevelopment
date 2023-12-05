setInterval(timer, 1);
var button = document.getElementById("mainButton");
var buttonText = document.getElementById("buttonText");
var started = false;
var clicks = 0;
var d_time = 0;
var time = 0;
var x = 0;
var y = 0;
var cps = 0;

function getCursor(event){
    x = event.clientX;
    y = event.clientY;
}

function clicker(){
    if(started === false){
        started = true;
        d_time = time;
        clicks = 0;
    }
    if(time - d_time < 5000){
        clicks += 1;
    }
    
    var circle = document.createElement("div");
    circle.style.backgroundColor = "blue";
    circle.style.position = "absolute";
    circle.style.bottom = `calc(-${y}px + 50vh + 25px)`;
    circle.style.left = `calc(${x}px - 50vw + 225px)`;
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "100%"
    circle.setAttribute("class", "click")
    button.appendChild(circle);

}

function timer(){

    if(started === true){
        cps = String(Math.round(clicks / ((time - d_time) / 1000) * 100) / 100);
        buttonText.innerHTML = cps;
        if(time - d_time > 5000){
            alert(`You did ${cps}cps`);

            started = false;
            buttonText.innerHTML = "";
        }
    }
    time = Date.now();
}