enemyData = {x:0, vx:0 , y:0, vy:0}
time = Date();
d_time = Date();

setInterval(Tick,1);

function Tick(){
    time = Date.UTC;
    enemyAI();
}


function enemyAI(){


    enemyData.vx += (Math.random() - 0.5) / 10;
    enemyData.vy += (Math.random() - 0.5) / 10;

    if(enemyData.vx > 0.5){
        enemyData.vx = (enemyData.vx / enemyData.vx) / 2;
    }
    if(enemyData.vy > 0.5){
        enemyData.vy = (enemyData.vy / enemyData.vy) / 2;
    }
    if(Math.abs(enemyData.x + enemyData.vx + 5) < window.innerWidth / 2){
        enemyData.x += enemyData.vx;
    }else{enemyData.vx = -enemyData.vx}
    if(Math.abs(enemyData.y + enemyData.vy + 5) < window.innerHeight / 2){
        enemyData.y += enemyData.vy;
    }else{enemyData.vy = -enemyData.vy}
    document.getElementById("enemy").style.bottom = "calc(" + String(enemyData.y - 5) + "px" + " +" + " 50vh)";
    document.getElementById("enemy").style.left = "calc(" + String(enemyData.x - 5) + "px" + " +" + " 50vh)";
    document.getElementById("enemy").style.rotate = String(Math.atan(enemyData.vx / enemyData.vy) * 57.2958) + "deg"
}