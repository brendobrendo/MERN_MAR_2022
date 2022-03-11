import React, { useState } from 'react';
import Display from './Display';

const Form = (props) => {

    console.log("FORM props ->", props.users);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [myObj, setMyObj] = useState({
        username: "",
        email: "",
        password: "",
        age: 0
    })

    // alternative way
    // const allInputs = (e) => {
    //     console.log(e.target.name);
    //     setMyObj({
    //         ...myObj,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const handleUserName = (value) => {
        console.log(value);
        setUsername(value);
    }

    // form submission function
    const createUser = (e) => {
        e.preventDefault();
        console.log("submitted");

        // create the user
        const user = {
            username,
            email,
            password
        }

        console.log(user);
        // call the function from app.js that came from props
        props.addUser();
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            username: {JSON.stringify(username)} <br/>
            {/* username: {username} <br/> */}
            email: {JSON.stringify(email)} <br/>
            password: {JSON.stringify(password)} <br/>
            {/* <p>
                {JSON.stringify(myObj)}
            </p> */}
            <form onSubmit={ createUser }>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => handleUserName(e.target.value)} />
                    {/* <input type="text" name="username" onChange={(e) => allInputs(e)} /> */}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    {/* <input type="text" name="email" onChange={(e) => allInputs(e)} /> */}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                    {/* <input type="text" name="password" onChange={(e) => allInputs(e)} /> */}
                </div>
                {/* <div>
                    <label>age: </label>
                    <input type="text" name="age" onChange={(e) => allInputs(e)} />
                </div> */}
                <input type="submit" value="Create User" />
            </form>
            <p></p>
            <Display users={props.users}/>
        </fieldset>
    )
}

export default Form