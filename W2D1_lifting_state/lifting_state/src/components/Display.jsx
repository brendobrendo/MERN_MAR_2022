import React from 'react'

const divStyle = {backgroundColor: '#e3e3e3', width: "80%", margin: "0 auto"}


const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {/* {
                JSON.stringify(props.animals)
            } */}
            <div>
                {
                    props.animals.map((animal, i) => {
                        return <li style={divStyle} key={i}>{animal}</li>
                    })
                }
            </div>
        </fieldset>
    )
}

export default Display