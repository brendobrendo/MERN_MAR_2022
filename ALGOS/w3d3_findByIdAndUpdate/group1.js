// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

// check 
// someObj.hasOwnProperty("key")

// Object.keys(someObj) // returns [an array of "keys"]


const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

function findByIdAndUpdate(id, updatedVals, collection) { 
    for(let obj of collection){
    // find if the id key value matches the parameter id
    if(obj.id === id){
        const keys=Object.keys(updatedVals);
        for(let key in updatedVals){
            if(obj.hasOwnProperty(key)){
                obj[key]=updatedVals[key];
            }
        }
        return obj;
    }

}

return null; }

function findByIdAndUpdate(id, updatedVals, collection) {
    let idx = null;
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].id === id) {
            idx = i;
            break;
        }
    }
    if (idx === null) {
        return idx;
    }

    for (key in updatedVals) {
        if (collection[idx].hasOwnProperty(key)){
            collection[idx][key] = updatedVals[key];
        }
    }

    return collection[idx];
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));

// --- TEST the following: ---
// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null

