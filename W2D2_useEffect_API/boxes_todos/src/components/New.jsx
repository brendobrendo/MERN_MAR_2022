import React, {useState} from 'react'

const New = (props) => {

    const [newColor, setNewColor] = useState("");

    const submitColor = (e) => {
        e.preventDefault();
        // console.log("submitted", newColor);

        const newBoxObj = {
            color: newColor,
            status: false
        }

        props.createBox(newBoxObj)
        // props.createBox({color: newColor})

    }

    return (
        <fieldset>
            <legend>New.jsx</legend>
            <p>
                {JSON.stringify(newColor)}
            </p>

            <form onSubmit={submitColor}>
                color: <input type="color" value={newColor} onChange={e => setNewColor(e.target.value)}/> 
                <button>add</button>
            </form>
        </fieldset>
    )
}

export default New;