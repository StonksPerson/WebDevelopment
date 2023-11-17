const money = document.getElementById("money").value;
const costs = 
document.getElementById("food").value +
document.getElementById("gas").value +
document.getElementById("electricity").value +
document.getElementById("water").value +
document.getElementById("cars").value +
document.getElementById("insurance").value;

if(money - costs  < 0){
    document.getElementById("0").innerHTML = "Try to save more money";
    document.getElementById("1").innerHTML = "Try to buy less";
    document.getElementById("2").innerHTML = "Try to cut purchases";
    document.getElementById("3").innerHTML = "Try to get discounts";
    document.getElementById("4").innerHTML = "Buy cheaper things";
}else if (money - costs == 0){
    document.getElementById("0").innerHTML = "";
    document.getElementById("1").innerHTML = ;
    document.getElementById("2").innerHTML = ;
    document.getElementById("3").innerHTML = ;
    document.getElementById("4").innerHTML = ;
}else{
    document.getElementById("0").innerHTML = ;
    document.getElementById("1").innerHTML = ;
    document.getElementById("2").innerHTML = ;
    document.getElementById("3").innerHTML = ;
    document.getElementById("4").innerHTML = ;
}