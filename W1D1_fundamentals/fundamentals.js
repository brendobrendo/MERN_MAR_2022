// // var x;

// var x = 22;
// // console.log(x); // ?

// function doStuff() {
//     var y = 44;
//     return y;
// }

// console.log(doStuff()); // ?
// // console.log(y); // ?



// // hello("john")
// // function hello(name) {
// //     console.log("hello", name);
// // }

// console.log(x);
// let x = "hello"; // anchor 
// const num = 34;
// num = 23;

// for (let i = 0; i<10; i++) {
//     const num = i + 10;
// }


// const person1 = new Person()

// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };

// DESTRUCTURING 
//       keys      keys         OBJECT
// const {lastName, firstName}  = person;
// const {email:personEmail}  = person;

// console.log(lastName);
// console.log(firstName);
// console.log(personEmail);

//                  0       1       2       3      4
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const [ , varName, , cat ] = animals;
// console.log(varName, cat);

// console.log(animals[1]);

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const personCopy = { ...person };
//   console.log(personCopy === person);
//   console.log(personCopy.addresses === person.addresses);


//   console.log(person["addresses"][0]);
//   console.log("------------");
//   console.log(person.addresses[0]);

//   const personCopy = person;
//   console.log(personCopy);





// const array1 = [11,22,33,44];
// // const array3 = [...array1];

// // const [...array2] = array1;
// // const {key} = person;

// array2.push(90001);
// console.log(array1); // ?
// console.log(array2); // ?
// console.log(array3); // ?








// const personEmail = person.email;
// const username = person.username
// const createdAt = person.createdAt
// console.log(username);



// pass by reference

// console.log(person.firstName);
// console.log(person["lastName"]);
// person.firstName = "john";
// console.log(person.firstName);
// person.age = 123;




var pow = function () {
    return 3 * 3;
}

const pow3 = () => {
    console.log("Asdsa");
    return 3 * 3;
}
// const pow2 = () => 3 * 3;

// setTimeout( () => console.log("hello"), 2000)





var funcName = function (name) {
    console.log("hi " + name);
    // console.log(this);
}

const funcNameArrow = (name) => {
    console.log("hi " + name);
}

const funcArrow2 = name => {
    console.log("hi" + name);
    console.log("hi there " + name);
}

// funcNameArrow("john")
// funcName("john")