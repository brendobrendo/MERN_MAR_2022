const animals = ["leopard", "giraffe", "zebra", "elephant", "monkey", "lion"];

const x = animals.map( function(a, i) {
    return `${i+1} - ${a}, is cool`  
})

console.log(x);