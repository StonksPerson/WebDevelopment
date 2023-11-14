function tellFortune(){
    document.getElementById("fortune").innerHTML = `You will be married to ${document.getElementById("name").value} with ${document.getElementById("children").value} kids`;
}

function calculateDogAge(){
    document.getElementById('age').innerHTML = `Your dog is ${document.getElementById("dog-age").value * 7} years old in dog years!`;
}

function calculateSupply(){
    amountPerDay = document.getElementById("amount-per-day").value;
    age = document.getElementById("current-age").value;
    totalAmount = (90 - age) * amountPerDay * 365.25;

    document.getElementById('supply').innerHTML = `You will need ${totalAmount} to last you until the ripe old age of ${90}`;
}

function calculateCircumference(){
    document.getElementById("circumference").innerHTML = `The circumfrence is ${Math.PI * document.getElementById("radius").value}`
}

function calcArea(){
    document.getElementById("area").innerHTML = `The area is ${(2 * Math.PI) * (Math.pow(document.getElementById("radius2").value, 2))}`;
}

function celsiusToFahrenheit(){
    document.getElementById("fahrenheit").innerHTML = `${document.getElementById("celcius").value} degrees Celsius is ${(document.getElementById("celcius").value * (9/5)) + 32 } degrees farenheit`;
}

function fahrenheitToCelsius(){
    document.getElementById("celsius2").innerHTML = `${document.getElementById("fahrenheit2").value} degrees Farenheit is ${(document.getElementById("fahrenheit2").value - 32) * (5 / 9)} degrees celsius`;
}
