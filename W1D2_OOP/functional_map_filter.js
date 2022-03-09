// Functional programming
// .map() .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];


// combine .filter .map
const filteredAnimals3 = animals.filter( (animal) => animal.includes("o")).map( el => el + " contains an 'o'").length
// console.log(filteredAnimals3);


// .filter ----------------------------
const filteredAnimals = animals.filter( (elem, i) => {
    if (elem.length <= 5) {
        return true
    } else {
        return false
    }
});
const filteredAnimals2 = animals.filter( (elem, idx) => elem.length <= 5);
// console.log(filteredAnimals2);


// .map --------------------------------
const x = animals.map( function(elem){
    return `${elem} is cool`
})

const y = animals.map( (a, i) => {
    let num = 10;
    num += i;
    return `${num} -  ${a} is cool`;
})
// console.log(y);
// console.log(animals);

// ------------
const people = [
    {name: "Bob", age: 30 },
    {name: "Mary", age: 31},
    {name: "Sue", age: 28},
    {name: "George", age: 38}
];

const peopleOver30 = people.filter( (person) => {
    if (person.age > 30) {
        return true
    } else {
        return false
    }
})

const peopleOver30_2 = people.filter( p => p.age > 30)
// const peopleOver30_2 = people.filter( p => {
//     console.log(p.name + " is " + p.age + " old");
//     return p.age > 30
// })


console.log(peopleOver30_2);