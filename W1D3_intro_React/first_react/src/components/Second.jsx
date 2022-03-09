import React from "react";

class Second extends React.Component {

    render() {
        console.log(this.props.animals);

        const theseAnimals = this.props.animals;
        return (
            <fieldset>
                <legend>Second.jsx</legend>
                <h3>this is the SECOND component</h3>
                <p>
                    these are the animals from App.js
                </p>
                {
                    theseAnimals.map((a, i) => {
                        return (
                            <div key={i}>
                                <li>{i+1} - {a}</li>
                            </div>
                        )
                    })
                }
            </fieldset>
        )
    }
}

export default Second;