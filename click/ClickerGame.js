var Money_Per_Second = 0;
var t = new Date();
var last_t = t;
var num = 0;
var Currency = [
    {name: " ", amount: 0, chance: 0.8},
    {name: "BIG", amount: 0, chance: 0.01}, 
    {name: "Ultra", amount: 0, chance: 0.005}
]
var num_names = ["", " Thousand", " Million", " Billion", "Trillion", " Quadrillion", " Quintillion", " Septillion", " Octillion", " Nonillion", " Decillion"]
var Upgrades = [
    {currency: 0, price:100, name: "Auto Clicker", max:100000, amount:0, description:"Construction workers that only need to be payed once! (They are not very good at their job.)", id: "autoClicker"},
    {currency: 1, price: 1, name: "Ultra Clicker", max:100000, amount: 0, description:"This is more advanced and crazy version of the autoclicker that you should totaly buy ;)", id: "megaClicker"},
    {currency: 2, price: 10000, name: "Crazy Upgrade", max:100000, amount: 1, description:"This upgrade is for real the coolest upgrade in the intire world :)))))", id: "CoolUpgrade" }
]
var bulkPurchase = 1;

//initialize divs

for(i = 0; i < Upgrades.length; i++){

    var button = document.createElement('button');
    var price = document.createElement('h4');
    var desc = document.createElement('p');
    document.getElementById('Upgrades').appendChild(button);
    price.setAttribute('class', 'price')
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
    rollLuck(Amount)
    UpdateCounter()
}

function UpdateCounter() {
    for(i = 0; i < Currency.length; i++){
        if(document.getElementById(Currency[i].name) != null){
            document.getElementById(Currency[i].name).innerHTML = shrinkNumber(Currency[i].amount) + " " + Currency[i].name + " Dollars";
        }
    }
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

    ClickCounter(Money_Per_Second * ((t - last_t)/1000));

}

setInterval(GameTick,1);

function GameTick() {

    t = new Date();

    Money_Per_Second = 1;

    AddClicks()
    UpdateCounter()
    checkUpgrades()
    checkMonies()
    last_t = t;

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

    if(Currency[Upgrades[upgradeId].currency].amount >= Upgrades[upgradeId].price * bulkPurchase){
        Currency[Upgrades[upgradeId].currency].amount = Currency[Upgrades[upgradeId].currency].amount - Upgrades[upgradeId].price * bulkPurchase;
        Upgrades[upgradeId].amount += 1 * bulkPurchase;
        document.getElementById(elementId).getElementsByClassName("price")[0].innerHTML = Upgrades[upgradeId].name + ": " + Upgrades[upgradeId].price * bulkPurchase + Currency[Upgrades[upgradeId].currency] + " Dollars";
        document.getElementById(elementId).getElementsByClassName("desc")[0].innerHTML = Upgrades[upgradeId].description;

    }

}

function checkUpgrades() {

    let i = 0;
    for(let e = 0; e < Currency.length; e++){
        i = 0;
        while(i < document.getElementsByClassName("Upgrade").length){
            let id = document.getElementsByClassName("Upgrade")[i].id
            if(Upgrades[i].price <= Currency[e].amount && e == Upgrades[i].currency || Upgrades[i].amount > 0)
            {
                document.getElementById(id).hidden = false;
                document.getElementById(id).getElementsByClassName("price")[0].innerHTML = Upgrades[i].name + ": " + shrinkNumber(Upgrades[i].price * bulkPurchase) + " " + Currency[Upgrades[i].currency].name + " Dollars";
                document.getElementById(id).getElementsByClassName("desc")[0].innerHTML = Upgrades[i].description;

            } else {
                document.getElementById(id).hidden = true;
            }
            i++;
        }
    }
}

function checkMonies() {

    for(i = 0; i < Currency.length; i++){
        if(Currency[i].amount > 0){
            if(document.getElementById(Currency[i].name) == null){
                var elmt = document.createElement("h1");
                elmt.setAttribute("id", Currency[i].name);
                elmt.setAttribute("class", 'mainNumbers');
                document.getElementById("currencies").appendChild(elmt);
            }
        }


    }

}

function rollLuck(Amount) {
    var chance = 0;
    var idx = 0

    for(i = 0; i < Currency.length; i++){
        chance = Currency[i].chance;
        var rand = Math.random();
        if(rand < chance){
            Currency[i].amount += 1;
            idx += 1;
        }
        if(idx == Amount){
            return
        }
    }
}