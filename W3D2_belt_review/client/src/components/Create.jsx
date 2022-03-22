import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = (props) => {

    const history = useHistory()

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isImportant, setIsImportant] = useState(false)

    const createNote = (e) => {
        e.preventDefault();
        console.log(title, content, isImportant);

        const newNote = {
            title: title,
            content,
            isImportant
        }
        // POST to the db, with the obj
        axios.post("http://localhost:8000/api/notes", newNote )
            .then( res => {
                console.log(res.data);
                history.push("/")
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <p>
            {JSON.stringify(title)} <br/>
            {JSON.stringify(content)} <br/>
            {JSON.stringify(isImportant)} <br/>
        </p>
        <h3>Form</h3>
        <form onSubmit={createNote}>
            title: 
            <input onChange={e => setTitle(e.target.value)} value={title} /> <br/>
            content:
            <input onChange={e => setContent(e.target.value)} value={content}/> <br/>

            <input type="checkbox" onChange={e=> setIsImportant(e.target.checked)} checked={isImportant} /> is this important?<br/>

            <button>Create</button>
        </form>

    </div>
  )
}

export default Create