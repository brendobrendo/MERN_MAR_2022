import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Form = (props) => {

    const history = useHistory();
    console.log(history);

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const sendSurvey = (e) => {
        e.preventDefault();
        
        // history.push("/")
        // history.push("/results/" + name +"/"+comment);
        history.push(`/results/${name}/${comment}`);
    }

    return (
        <form onSubmit={sendSurvey}>
            <p>
                {JSON.stringify(name)} : {JSON.stringify(comment)}
            </p>
            <label>Your Name:</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <label>Your Comment:</label>
            <textarea onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
            <input type="submit" value="Submit Survey" />
        </form>
    )
}

export default Form