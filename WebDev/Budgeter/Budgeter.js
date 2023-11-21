var mostExpensiveValue = 0;
var mostExpensive = HTMLElement;
document.getElementById("tipsList").hidden = true;
document.getElementById("surplus").hidden = true;
document.getElementById("rating").hidden = true;

function onSubmit(){
    const costs = 
    document.getElementById("food").value * 1 +
    document.getElementById("gas").value * 1 +
    document.getElementById("electricity").value * 1 +
    document.getElementById("water").value * 1 +
    document.getElementById("cars").value * 1 +
    document.getElementById("insurance").value * 1;
    const money = document.getElementById("money").value;
    const rating = document.getElementById("rating");
    const tips = document.getElementById("tipsList");
    rating.hidden = true;

    if(document.getElementById("food").value > mostExpensiveValue){
        mostExpensiveValue = document.getElementById("food").value;
        mostExpensive = document.getElementById("food")
    }
    if(document.getElementById("gas").value > mostExpensiveValue){
        mostExpensiveValue = document.getElementById("gas").value;
        mostExpensive = document.getElementById("gas")
    }
    if(document.getElementById("electricity").value > mostExpensiveValue){
        mostExpensiveValue = document.getElementById("electricity").value;
        mostExpensive = document.getElementById("electricity")
    }
    if(document.getElementById("water").value > mostExpensiveValue){
        mostExpensiveValue = document.getElementById("water").value;
        mostExpensive = document.getElementById("water")
    }
    if(document.getElementById("cars").value > mostExpensiveValue){
        mostExpensiveValue = document.getElementById("cars").value;
        mostExpensive = document.getElementById("cars")
    }
    if(document.getElementById("insurance").value > mostExpensiveValue){
        mostExpensiveValue = document.getElementById("insurance").value;
        mostExpensive = document.getElementById("insurance")
    }

    document.getElementById("surplus").innerHTML = String(money - costs);

    if(money - costs < 0){
        document.getElementById("0").innerHTML = "Try to save more money";
        document.getElementById("1").innerHTML = `Try to buy less ${mostExpensive.id}`;
        document.getElementById("2").innerHTML = "Buy cheaper things";
        document.getElementById("3").innerHTML = "Try to get discounts";
        document.getElementById("4").innerHTML = `good luck, you need it.`;

        rating.innerHTML = "You did a bad job.";
        rating.style.backgroundColor = "#C03221";
        rating.style.borderColor = "#C03221";
        tips.style.backgroundColor = "#C03221";
        tips.style.borderColor = "#C03221";

    }else if (money - costs == 0){
        document.getElementById("0").innerHTML = "Good job breaking even!";
        document.getElementById("1").innerHTML = "Next time try saving money so you can have more freedom.";
        document.getElementById("2").innerHTML = `you could find a way to spend less on ${mostExpensive.id}`;
        document.getElementById("3").innerHTML = `if you get a surplus then you can buy more things for yourself`;
        document.getElementById("4").innerHTML = `good luck!`;

        rating.innerHTML = "You did an ok job.";
        rating.style.backgroundColor = "#F2D0A4";
        rating.style.borderColor = "#F2D0A4";
        tips.style.backgroundColor = "#F2D0A4";
        tips.style.borderColor = "#F2D0A4";
        tips.style.color = "#545E75";

    }else{
        document.getElementById("0").innerHTML = `Amazing! You have a surplus.`;
        document.getElementById("1").innerHTML = `You could spend it on something for yourself.`;
        document.getElementById("2").innerHTML = `You could save it to help buy more expensive things.`;
        document.getElementById("3").innerHTML = `You could invest it.`;
        document.getElementById("4").innerHTML = `No need for luck! You have figure it out!`;

        rating.innerHTML = "You did a great job!";
        rating.style.backgroundColor = "#3F826D";
        rating.style.borderColor = "#3F826D";
        tips.style.backgroundColor = "#3F826D";
        tips.style.borderColor = "#3F826D";

    }
    rating.hidden = false;
    document.getElementById("tipsList").hidden = false;
    document.getElementById("surplus").hidden = false;
}
