// rafce
import React, {useState} from 'react'

const FunctionalComp = (props) => {

    console.log("functional props", props);

    // destructuring props:
    // const { person, animals } = props;

    // CREATE STATE in Functional Comp
    //    state
    //      |       change state
    //      V             V                   default state
    const [unicornNum, setUnicornNum] = useState(props.num)

    // const [person, setPerson] = useState(props.person)
    const [person, setPerson] = useState({
        firstName: "john",
        favFood: "pizza",
        favNum: 7
      })


    const increaseNum = () => {
        console.log("clicked function!");
        // function t change state
        setUnicornNum(unicornNum + 1)

        setPerson({
            ...person,
            favNum: person.favNum + 1
        })
    }

    return (
        <fieldset>
            <legend>Functional</legend>
            <p>

                {/* props: {JSON.stringify(props)} */}
            </p>
            <p>
                num State: {unicornNum}
                {
                    unicornNum > 15 ? <p>🎈🎈🎈🎈🎈</p> : <p>keep clicking</p>
                }
                {/* person: {JSON.stringify(person)} */}
            </p>
            <hr />
            <p>
                personObj : {JSON.stringify(person)}<br/>
                person num: {person.favNum}
            </p>
            {/* <button onClick={increaseNum}>click</button> */}
            <button onClick={() => increaseNum()}>click</button>
        </fieldset>
    )
}

export default FunctionalComp