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
    let keyArr = [];
    if(!collection[id-1]){
        return null;
    }
    for (key in updatedVals) {
        keyArr.push(key)
        // console.log(keyArr)
    }
    for (let x = 0; x < collection.length; x++) {
        if (collection[x].id == id) {
            for (let i = 0; i < keyArr.length; i++) {
                if (collection[x].hasOwnProperty(keyArr[i])) {
                    collection[x][keyArr[i]] = updatedVals[keyArr[i]];
                    // console.log(collection[x][keyArr[i]]);
                }
            }
            return collection[x]
        }
    }
}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));


function findByIdAndUpdate(id, updatedVals, collection) { 
    let key = Object.keys(updatedVals)
    let values = Object.values(updatedVals)

    let newObj = {};
    
    for ( obj in collection) {
        if(collection[obj].id == id ){
            newObj = collection[obj]
           for ( i = 0 ; i < key.length ; i++ ){
                if(newObj.hasOwnProperty(key[i])){
                    newObj[key[i]] = values[i]
                }
           }
        }
    }
   console.log(newObj)
}
findByIdAndUpdate(3, { redBeltStatus: true }, students)
findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students)
findByIdAndUpdate(5, {}, students)


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

