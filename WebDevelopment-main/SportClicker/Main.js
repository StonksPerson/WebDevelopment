var stars = [];
var t = new Date();
var last_t = t;
var spawnStars = 0;
var last_star = 0;
var w = 0;

setInterval(GameTick,1);

function GameTick() {

    t = new Date();

    updateStars()

    last_t = t;
}

function updateStars() {
    var starScale = (t - last_t)/1000;

    if(last_star < t - 2 * (1000)){
        last_star = t;
        spawnStars = Math.floor(Math.random() * 10);
            for(i = 0; i < spawnStars; i++){
                w += 1;
                stars.push({x: (Math.floor(Math.random() * 10) - 5) , y: (Math.floor(Math.random() * 10) - 5), name: ('star' + w)})
                var star = document.createElement('div');
                star.style.backgroundColor = 'black';
                star.style.height = '10px';
                star.style.width = '10px';
                star.style.position = "absolute"
                star.setAttribute('id', stars[w - 1].name);
                document.getElementById('Stars').appendChild(star);

            }
    }

    for(i = 0; i < stars.length; i++){
        stars[i].x += stars[i].x * starScale;
        stars[i].y += stars[i].y * starScale;
        star = document.getElementById(stars[i].name);
        star.style.left = String(stars[i].x + visualViewport.width / 2) + "px";
        star.style.top = String(stars[i].y + visualViewport.height / 2) + "px";
        if(Math.abs(stars[i].x) > visualViewport.width / 2 || Math.abs(stars[i].y) > visualViewport.height / 2){
            star.remove();
            stars.splice(i, 1)
            document.getElementById('test').innerHTML = stars;
        }
    }
}