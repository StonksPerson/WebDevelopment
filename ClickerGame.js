var x = 0;
var R_Per_Second = 1;
var t = new Date();
var last_t = new Date();
function ClickCounter(Amount) {

    x = x + Amount;
    document.getElementById("count").innerHTML = x;
}

function subAuto(Amount) {
    R_Per_Second -= Amount;
    document.getElementById("autoAmount").innerHTML = R_Per_Second;
}

function addAuto(Amount) {
    R_Per_Second += Amount;
    document.getElementById("autoAmount").innerHTML = R_Per_Second;
}

function AddClicks () {
    x = x + (R_Per_Second*((last_t - t)));
}

setInterval(GameTick,1);

function GameTick() {

    t = new Date().getUTCSeconds();
    AddClicks();
    last_t = t;
    document.getElementById("count").innerHTML = x;

}

