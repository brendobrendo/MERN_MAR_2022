const obj1 = {
    name: "Pizza",
    calories: 9001,
};

// Object.values(obj1);
// Object.entries(obj1);

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};

obj1.__proto__ = obj2;

console.log(Object.entries(obj1));
// for(someKey in obj1) {
//     console.log(someKey);
// }