const animal = {
    species: "dog",
    name: "Max",
    legs: 4,
    color: "black-white",
    age: 5,
    humanAge: "",
    bark: () => `woof woof`
}

//console.log(animal.age)

//////////////////////////////////////////////////////

let humanAge;

if (animal.age === 1) {
    animal.humanAge = 10.5;
} else if (animal.age >= 2) {
    animal.humanAge = (2 * 10.5) + (animal.age - 2) * 4
}

//console.log(animal.humanAge)

//////////////////////////////////////////////////////

function getAnimalInfo() {
    return `My name is ${animal.name}. I am ${animal.humanAge} years old in human years which is ${animal.age} years old in ${animal.species} years.`
}
console.log(getAnimalInfo())