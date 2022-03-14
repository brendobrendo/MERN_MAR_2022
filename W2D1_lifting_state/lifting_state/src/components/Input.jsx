import React, { useState } from 'react'

const Input = (props) => {

    const [inputAnimal, setInputAnimal] = useState("");

    const submitAnimal = (e) => {
        e.preventDefault();
        console.log("submitted", inputAnimal);

        // call the function from props -> app.js
        props.addAnimal(inputAnimal);

        // alternate way
        // props.setAnimals([...props.animals, inputAnimal])
    }

    return (
        <fieldset>
            <legend>Input.jsx</legend>
            <p>
                input state: {JSON.stringify(inputAnimal)}
            </p>

            <form onSubmit={submitAnimal}>
                <input type="text" onChange={(e) => setInputAnimal(e.target.value)}/>
                <button>submit</button>
            </form>
        </fieldset>
    )
}

export default Input