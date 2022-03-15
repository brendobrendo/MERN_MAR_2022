import './App.css';
import React, { useState } from 'react';
import Box from './components/Box';
import New from './components/New';

function App() {

  const [boxes, setBoxes] = useState(
    [
      { color: "red", status: true },
      { color: "green", status: false },
      { color: "blue", status: true },
    ]
  )


  // CREATE BOX and add to state
  const createBox = (newBoxObj) => {
    // console.log(newBoxObj);

    // setBoxes([...boxes, newBoxObj]);

    // alternative way
    const copyBoxes = [...boxes]
    copyBoxes.push(newBoxObj);
    console.log(copyBoxes);
    setBoxes(copyBoxes);
  }

  // delete box
  const deleteBox = (deleteIdx) => {
    console.log("idx to DELETE -> ", deleteIdx);
    
    const filteredBoxes = boxes.filter((b, i) => {
      if (deleteIdx === i) {
        return false
      } else {
        return true
      }
    })
    // const newFilteredBoxes = boxes.filter((b,i) => deleteIdx !== i)
    setBoxes(filteredBoxes);
  }

  // UPDATE BOX
  const updateBox = (boxIdx) => {
    console.log(boxIdx);

    const copyBoxes = [...boxes]

    // if (copyBoxes[boxIdx].status === true) {
    //   copyBoxes[boxIdx].status = false
    // } else {
    //   copyBoxes[boxIdx].status = true
    // }

    copyBoxes[boxIdx].status = !copyBoxes[boxIdx].status; 

    setBoxes(copyBoxes)
  }

  return (
    <div className="App">
      <h1>Boxes 📦</h1>
      {JSON.stringify(boxes)}
      <hr />
      <New createBox={createBox} />
      {
        boxes.map((box, idx) => {
          return <Box
            key={idx}
            box={box}
            idx={idx}
            deleteBox={deleteBox}
            updateBox={updateBox}
          />
        })
      }
    </div>
  );
}

export default App;
