import React from 'react'

const Box = (props) => {
    console.log(props.box);

    // const {color:boxColor} = props.box
    return (
        <div style={{
            backgroundColor: props.box.color,
            height: "100px",
            width: "100px",
            display: "inline-block"
        }}>{props.box.color}<br />
            {/* <p>
                {props.box.status ? "yes" : "no"}
            </p> */}
            <input
                type="checkbox"
                checked={props.box.status}
                onChange={() => props.updateBox(props.idx)}
            /> <br />
            <button onClick={() => props.deleteBox(props.idx)}>delete {props.idx}</button>
        </div>
    )
}

export default Box;