var Money = 0;
var Money_Per_Second = 10000000;
var t = new Date();
var last_t = new Date();
var num = 0;
var num_names = ["", " Thousand", " Million", " Billion", "Trillion", " Quadrillion", " Quintillion", " Septillion", " Octillion", " Nonillion", " Decillion"]
var Upgrades = [
    {price:10, name: "Auto Clicker", max:100000, amount:0, description:"Construction workers that only need to be payed once! (They are not very good at their job.)", id: "autoClicker"},
    {price: 100, name: "Ultra Clicker", max:100000, amount: 0, description:"This is more advanced and crazy version of the autoclicker that you should totaly buy ;)", id: "megaClicker"},
    {price: 10000, name: "Crazy Upgrade", max:100000, amount: 0, description:"This upgrade is for real the coolest upgrade in the intire world :)))))", id: "CoolUpgrade" }
]
var bulkPurchase = 1;

//initialize divs

for(i = 0; i < Upgrades.length; i++){

    var button = document.createElement('button');
    var price = document.createElement('h4');
    var desc = document.createElement('p');
    document.getElementById('Upgrades').appendChild(button);
    price.setAttribute('class', 'price ')
    desc.setAttribute('class', 'desc')
    button.setAttribute('id', Upgrades[i].id);
    button.setAttribute('class', 'Upgrade');
    button.appendChild(price);
    button.appendChild(desc);
    button.onclick = function() {Upgrade(i, Upgrades[i])};
    var onClickText = "Upgrade(" + i + "," + button.id + ")"
    button.setAttribute('onclick', onClickText)

}

function ClickCounter(Amount) {

    Money = Money + Amount;
    UpdateCounter()
}

function UpdateCounter() {
    document.getElementById("count").innerHTML = shrinkNumber(Money) + " Dollars";
    document.getElementById("autoAmount").innerHTML = bulkPurchase;
    document.getElementById('title').innerHTML = shrinkNumber(Money) + " Dollars";
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
    Money = Money + (Money_Per_Second*((t - last_t)/1000));
}

setInterval(GameTick,1);

function GameTick() {

    Money_Per_Second = Upgrades[0].amount + Upgrades[1].amount * 100;
    t = new Date();
    AddClicks();
    last_t = t;
    UpdateCounter()
    checkUpgrades()
}

function shrinkNumber(number) {
    var num_idx = 0;
    num = number;
    while(num >= 1000){
        num = num / 1000;
        num_idx++;
    }

    num = Math.floor(num * 100)/100 + num_names[num_idx];
    if(num_idx == 0){
        num = Math.floor(num);
    }   
    
    return(num)
}

function addShrunkNumber() {

}

function subtractShrunkNumber() {

}

function multiplyShrunkNumber() {

}

function divideShrunkNumber() {

}

function Upgrade(upgradeId, elementId) { 

    if(Money >= Upgrades[upgradeId].price * bulkPurchase){
        Money = Money - Upgrades[upgradeId].price * bulkPurchase;
        Upgrades[upgradeId].amount += 1 * bulkPurchase;
        document.getElementById(elementId).getElementsByClassName("price")[0].innerHTML = Upgrades[upgradeId].name + ": " + Upgrades[upgradeId].price * bulkPurchase;
        document.getElementById(elementId).getElementsByClassName("desc")[0].innerHTML = Upgrades[upgradeId].description;

    }

}

function checkUpgrades() {
    document.getElementById("autoClicker").getElementsByClassName("price")[0].innerHTML = Upgrades[0].name + ": " + Upgrades[0].price * bulkPurchase;
    document.getElementById("autoClicker").getElementsByClassName("desc")[0].innerHTML = Upgrades[0].description;

    var i = 0;
    while(i < document.getElementsByClassName("Upgrade").length){
        var id = document.getElementsByClassName("Upgrade")[i].id
        if(Upgrades[i].price <= Money + Money_Per_Second * 10 || Upgrades[i].price <= Money && Upgrades[i].amount < Upgrades[i].max )
        {
            document.getElementById(id).hidden = false;
            document.getElementById(id).getElementsByClassName("price")[0].innerHTML = Upgrades[i].name + ": " + shrinkNumber(Upgrades[i].price * bulkPurchase) + " Dollars";
            document.getElementById(id).getElementsByClassName("desc")[0].innerHTML = Upgrades[i].description;
        } else {
            document.getElementById(id).hidden = true;
        }
        i += 1;
    }

}