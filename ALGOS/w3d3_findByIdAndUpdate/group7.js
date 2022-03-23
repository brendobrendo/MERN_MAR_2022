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
    let returnValue = null;
    for(let i=0; i< collection.length; i++){
        if(collection[i].hasOwnProperty('id') && id == collection[i].id){
            // Object.keys(updatedVals)
            const updatedKeys = Object.keys(updatedVals)
            for(let j=0; j<updatedKeys.length; j++){
                let currentKey = updatedKeys[j]
                collection[i][currentKey] = updatedVals[currentKey]
                returnValue = collection[i]
            }
        }
    } return returnValue
}

function findByIdAndUpdateRefined(id, updatedVals, collection) {
    let returnValue = null;
    for(let i=0; i< collection.length; i++){
        if(collection[i].hasOwnProperty('id') && id == collection[i].id){
            for (const key in updatedVals) {
                if (updatedVals.hasOwnProperty(key) && collection[i].hasOwnProperty(key)) {
                    collection[i][key] = updatedVals[key]
                    returnValue = collection[i]
                }
            }
        }
    } return returnValue
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

