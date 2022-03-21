import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ShowOne = (props) => {

  const [thisUser, setThisUser] = useState({})

  const {someId} = useParams();

  console.log(someId);

  useEffect( () => {
    axios.get("http://localhost:8000/api/users/"+someId)
      .then( res => {
        console.log(res.data);
        setThisUser(res.data);
      })
      .catch( err => console.log(err))
  }, [someId])


  return (
    <fieldset>
      <p>
        {thisUser.name}
      </p>
      <p>
        {thisUser.createdAt}
      </p>
    </fieldset>
  )
}

export default ShowOne