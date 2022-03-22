/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  };
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];
  
  obj1.__proto__ = obj2;
  
  function entries(obj) { }
  
  
  
function entries(obj){
  const result = []
  const keys = Object.keys(obj)
  const values = Object.values(obj)

  for(let i=0;i<keys.length;i++){
      result.push([keys[i],values[i]])
  }

  return result
}
  function entries2(obj) 
  {
    let result = []       //Results
    for(const key in obj) //For every key in object
    {
      result.push([key,obj[key]]) //Push key and object key
    }
    return result         //Return the results
  }
  

  console.log(entries(obj1));
  
  // ==================================================
  
  /* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
  */
  
  const table = "users";
  const insertData1 = { first_name: "John", last_name: "Doe" };
  const expectedA =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";
  function insert(insertData){
    let [str1,str2] = ["INSERT INTO users (",") VALUES ("]
    const entry = Object.entries(insertData)
    // console.log(entry);
    for(let i = 0 ; i<entry.length-1;i++){
        str1 += entry[i][0] +', '
        if((typeof(entry[i][1]))=== 'string'){
            str2 += '\''+entry[i][1]+'\'' +', '
        }else{
            str2 += entry[i][1] +', '
        }
    }
    

    
    if((typeof(entry[entry.length-1][1]) === 'string')){
        str2 += '\''+entry[entry.length-1][1]+'\''
    }else{
        str2 += entry[entry.length-1][1] 
    }

    return str1 + entry[entry.length-1][0] + str2  +');'
}

console.log(insert(insertData1));
console.log(insert(insertData2))



function insert2(obj,table){
  const keys = Object.keys(obj)
  const values = Object.values(obj)

  for (let i = 0;i<values.length;i++){
      if((typeof(values[i])) === 'string'){
          values[i] =  '\''+ values[i] + '\''
      }
  }

  return `INSERT INTO ${table} (${keys.join(',')}) VALUES (${values.join(',')});`
}
  // Bonus:
  const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
  };
  const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
  // Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.
  
  function insert(tableName, columnValuePairs) { }  

  function insert2(tableName, columnValuePairs)
  { 
    let Keys = Object.keys(columnValuePairs)  //Generate all the Keys
    let values = ''                           //set the value values
    for (const key of Keys)                   //ACtually start populating the values
    {
        if(typeof(columnValuePairs[key])=== "string") values.push(`'${columnValuePairs[key]}'`) 
        else values.push(columnValuePairs[key])   //The keys are in order from keys
    }
    return `"INSERT INTO ${tableName} (${Keys.join(',')}) VALUES (${values});"`  //Return the Query
  }