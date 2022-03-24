/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

function webMD(ailments, meds) {
// Hashmap of treatment effectiveness counter- treatments=keys, ailments-treated-from-ailments-counter=values
// iterate through each treatment for each ailment (for loop within a for loop)
 // if that treatment is effective against that ailment
    // add 1 to the key value (if the key(treatment) already exists in our hashmap)
    // create key for that treatment with value of 1 (if a key doesn't already exist)
  // After we've gone through all ailments (in 1st parameter array) and treatments, find the treatment that treats most ailments
    // from our object table (key with the highest value) and return it in an array
  // To find the highest value, instantiate a variable to find the highest value in our object and set it to 0
  // iterate through object checking each entries value and comparing it to our maxValue variable
  // Instantiate an empty array to hold the treatment(s) with most ailments treated
  
  // if it is greater than our current maxValue, then set our returnArray to an array with the current treatment inside only and change
    // update maxValue
  // if it is equal to our current maxValue, pussh the treatment into the array
  
  // after iterating, return the return array

    let treatmentCounter = {};
    let returnArray = [];
    let maxTreatmentCounter = 0;

    for (ailment of ailments){
        for (treatment of meds) {
            if (treatment.treatableSymptoms.includes(ailment)) {
                if (treatmentCounter.hasOwnProperty(treatment.name)) {
                    treatmentCounter[treatment.name] += 1;
                }
                else {
                    treatmentCounter[treatment.name] = 1;
                }
            };
        }
    }

    for (treatment in treatmentCounter) {
        if (treatmentCounter[treatment] > maxTreatmentCounter) {
            maxTreatmentCounter = treatmentCounter[treatment];
            returnArray = [treatment]
        }
        else if (treatmentCounter[treatment] === maxTreatmentCounter) {
            maxTreatmentCounter = treatmentCounter[treatment];
            returnArray.push(treatment);
        }
    }
    return returnArray
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));

