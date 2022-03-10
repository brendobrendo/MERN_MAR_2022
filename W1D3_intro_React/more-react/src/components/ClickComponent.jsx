import React, { Component } from "react";
import myCoolStyles from "./ClickComponent.module.css"

const pStyle = {
    color: "red",
    // backgroundColor: "blue"
}

class ClickComponent extends Component {
    constructor(props) {
        super(props)
        // console.log(this);

        this.state = {
            unicorns: 100,
            personAge: this.props.person.age
        }
    }

    // increaseAge() {}

    increaseAge = () => {
        console.log("clicked ");
        // const newAge = this.state.personAge +1
        this.setState({
            personAge: this.state.personAge + 1
        }, () => console.log(this.state.personAge))
        // console.log(this.state.personAge);
    }


    render() {
        // console.log(this.props.person);
        const { age, name, favFood, } = this.props.person

        return (
            <fieldset>
                <legend>ClickComponent.jsx</legend>
                <p className={myCoolStyles.txt}>
                    person name: {name}
                </p>
                <p style={pStyle}>
                    person age: {this.state.personAge}
                </p>
                {/* <button onClick={this.increaseAge}>click</button> */}
                <button 
                    onClick={() => this.increaseAge()}
                    className={myCoolStyles.btn}
                >
                    click
                </button>
            </fieldset>
        )
    }
}

export default ClickComponent;