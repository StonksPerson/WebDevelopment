var Paper = 0;
var P_Per_Second = 10000000;
var t = new Date();
var last_t = new Date();
var num = 0;
var num_names = ["", " Thousand", " Million", " Billion", "Trillion", " Quadrillion", " Quintillion", " Septillion"]
var Upgrades = [
    {price:10, name: "Auto Clicker", max:100000, amount:0, description:"Automaticly farms for paper"},
    {price: 100, name: "Ultra Clicker", max:100000, amount: 0, description:"This is more advanced and crazy version of the autoclicker that you should totaly buy ;)"}
]
var bulkPurchase = 1;
function ClickCounter(Amount) {

    Paper = Paper + Amount;
    UpdateCounter()
}

function UpdateCounter() {
    document.getElementById("count").innerHTML = shrinkNumber(Paper) + " Paper";
    document.getElementById("autoAmount").innerHTML = bulkPurchase;
}

function subAmount(Amount) {
    bulkPurchase = bulkPurchase / Amount;
    document.getElementById("autoAmount").innerHTML = bulkPurchase;
}

function addAmount(Amount) {
    bulkPurchase = bulkPurchase * Amount;
    document.getElementById("autoAmount").innerHTML = bulkPurchase;
}

function AddClicks () {
    Paper = Paper + (P_Per_Second*((t - last_t)/1000));
}

setInterval(GameTick,1);

function GameTick() {

    P_Per_Second = Upgrades[0].amount + Upgrades[1].amount * 100;
    t = new Date();
    AddClicks();
    last_t = t;
    UpdateCounter()
    checkUpgrades()
}

function shrinkNumber(number) {
    var num_idx = 0;
    num = number;
    while(num > 1000){
        num = num / 1000;
        num_idx++;
    }

    num = Math.floor(num * 100)/100 + num_names[num_idx];
    if(num_idx == 0){
        num = Math.floor(num)
    }   
    
    return(num)
}

function Upgrade(id, elementId) { 

    if(Paper >= Upgrades[id].price * bulkPurchase){
        Paper = Paper - Upgrades[id].price * bulkPurchase;
        Upgrades[id].amount += 1 * bulkPurchase;
        document.getElementById(elementId).getElementsByClassName("price")[0].innerHTML = Upgrades[id].name + ": " + Upgrades[id].price * bulkPurchase;
        document.getElementById(elementId).getElementsByClassName("desc")[0].innerHTML = Upgrades[id].description;

    }

}

// function checkUpgrades() {
//     var i = 0;
//     while(i < document.getElementsByClassName("Upgrade").length){
//         if(document.getElementsByClassName("Upgrade")[i].getElementsByClassName("price") <= Paper + P_Per_Second * 100 || document.getElementsByClassName("Upgrade")[i].getElementsByClassName("price") <= Paper)
//         {
//             document.getElementsByClassName("Upgrade")[i].getElementsByClassName("price").innerHTML = Upgrades[i].name + ": " + Upgrades[i].price;
//             document.getElementsByClassName("Upgrade")[i].getElementsByClassName("price").innerHTML = Upgrades[i].description;
//         } else {
//             document.getElementsByClassName("Upgrade")[i].getElementsByClassName("price").innerHTML = "";
//         }
//         i += 1;
//     }

// }