const player = document.getElementById("player")
playerData = {x: 0, y:0, vx:0, vy:0}

setInterval(tick, 1000)

function keyUp() {

        playerData.vx = 0;
        playerData.vy = 0;

}

function keyDown(e) {
    if(e.key == "a"){
        playerData.vx = -1;
    }
    if(e.key == "s"){
        playerData.vy = -1;
    }
    if(e.key == "d"){
        playerData.vx = 1;
    }
    if(e.key == "w"){
        playerData.vy = 1;
    }
}

function tick(){
    player.y += player.vy;
    player.x += player.vx;

    player.style.bottom = "calc(" + String(playerData.y) + "px + 50vh - 25px)"
    player.style.left = "calc(" + String(playerData.x) + "px + 50vw - 25px)"

}