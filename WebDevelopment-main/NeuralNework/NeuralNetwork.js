var enemyData = {x:0, vx:0 , y:0, vy:0}
var time = Date();
var d_time = Date();
var NeuronRows = 3;
var NeuronColums = 2;
var NeuronInputs = [0,0,0]
var NeruonOutputs = [0,0,0];
var hiddenLayer = [];
//List of lists conatining what neurons the neuron is connected to
var NeuronWeights = [];
//array of neuron connections
var currentNeuron = [];

function initializeNeurons() {
    for(i = 0; i < 3; i++){
        for(e = 0; e < NeuronRows; e++){
            currentNeuron.push((e % NeuronRows));
            NeuronWeights[i][e] = 0;
        }
        hiddenLayer.push(currentNeuron)
        currentNeuron = [];
    }
    for(i = 1; i < NeuronColums; i++){
        for(s = 0; s < NeuronRows; s++){
            for(w = 0; w < NeuronRows; w++){
                currentNeuron.push(s + 3);
                NeuronWeights[i][e] = 0;
            }
        }
        hiddenLayer.push(currentNeuron)
        currentNeuron = [];
    }
}

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