import React from 'react'

const Display = (props) => {
    // console.log("DISPLAY props", props);

    return (
        <fieldset>
            <legend>Display</legend>
            <p>
                {JSON.stringify(props.users)}
            </p>
            <p>
                {
                    props.users.map((user, index) => {
                        return <li key={index}>{user.username}</li>
                    })
                }
            </p>
        </fieldset>
    )
}

export default Display