var America = document.getElementById('America')
America.setAttribute('id', 'America')
document.body.appendChild(America)
for(i = 0; i < 5; i++){
    for(e = 0; e < 6; e++){
        var star = document.createElement('div');
        star.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
        star.style.backgroundColor = 'black';
        star.style.width = '10px';
        star.style.height = '10px';
        star.style.margin = '2px';
        star.setAttribute("class", "star");
        America.appendChild(star)
    }
    for(e = 0; e < 6; e++){
        var star = document.createElement('div');
        star.style.backgroundColor = 'transparent';
        star.style.width = '10px';
        star.style.height = '10px';
        star.style.margin = 'Zpx'
        star.setAttribute("class", "star");
        America.appendChild(star)
    }

}