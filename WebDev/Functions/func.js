function tellFortune(childNum, partnerName, location, job){
    return(`You will be a ${job} in ${location}, and married to ${partnerName} with ${childNum} kids`)
}

function calculateDogAge(dogAge){
    return(`Your dog is ${dogAge * 7} years old in dog years!`)
}

function calculateSupply(age, perDay){
    return(`You will need ${perDay * age * 365} to last you until the ripe old age of ${age}`)
}

function calcCircumfrence(radius){
    return(`The circumfrence is ${Math.PI * radius}`)
}

function calcArea(radius){
    return(`The area is ${(2 * Math.PI) * (Math.pow(radius, 2))}`)
}

function celsiusToFahrenheit(degrees){
    return(`${degrees} degrees Celsius is ${(degrees * (9/5)) + 32 } degrees farenheit`)
}

function fahrenheitToCelsius(degrees){
    return(`${degrees} degrees Farenheit is ${(degrees - 32) * 5/9} degrees celsius`)
}

tellFortune(5, "januel", "Portugul", "Work")
tellFortune(50, "help", "america", "parent")
tellFortune(1, "micelium", "brazil", "man")
tellFortune(7, "markle", "Target", "Target")

calculateDogAge(5)
calculateDogAge(3)
calculateDogAge(190)
calculateDogAge(6)

calculateSupply(2,5)
calculateSupply(6,40)
calculateSupply(1,10)
calculateSupply(50,50)

calcCircumfrence(5)
calcCircumfrence(6)
calcCircumfrence(2)
calcCircumfrence(1)

calcArea(4)
calcArea(3)
calcArea(5)
calcArea(6)

celsiusToFahrenheit(2)
celsiusToFahrenheit(6)
celsiusToFahrenheit(36)
celsiusToFahrenheit(2)

fahrenheitToCelsius(79)
fahrenheitToCelsius(89)
fahrenheitToCelsius(59)
fahrenheitToCelsius(378)