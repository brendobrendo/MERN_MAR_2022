import React from 'react'

const divStyle = { backgroundColor: '#e3e3e3', width: "80%", margin: "0 auto" }
const animalDiv = { display: "inline-block", fontSize: "22pt", outline: "1px solid grey", margin: "5px", backgroundColor: "white" };

const Display = (props) => {
    return (
        <fieldset style={divStyle}>
            <legend>Display.jsx</legend>
            {/* {
                JSON.stringify(props.animals)
            } */}
            <div>
                {
                    props.animals.map((animal, i) => {
                        return <li style={animalDiv} key={i}>{animal}</li>
                    })
                }
            </div>
        </fieldset>
    )
}

export default Display