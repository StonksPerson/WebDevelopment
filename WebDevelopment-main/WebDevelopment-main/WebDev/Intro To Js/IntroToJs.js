const  myName = "Kyle"

let favColor = "Bondulance :("

favColor = "Bimbutolerance :)"

let age = 30

mainPerson = {
    name: "Pombalulence :|",
    age: 200,
    favColor: "Pimbual  '.:(",
    favFoods: ["taco", "burrito", "spagetti", "chalk"]
}

favThings = [2, "movies"]

const isAlive = true

function describePerson(person) {
    // alert("MISSING PERSON ALERT: " + person.name)
    alert(`MISSING PERSON ALERT: ${person.name} missing since 2022, wearing tattered overalls`)
}

describePerson(mainPerson)

const isLoggedIn = false

if (isLoggedIn){
    document.getElementById('title').innerHTML = `Hello ${myName}`;
} else{
    document.getElementById('title').innerHTML = `Hello Guest`;
}

var para = document.createElement('p')
para.innerHTML = "I'm the paragraph you just created."
document.getElementById("div1").appendChild(para)