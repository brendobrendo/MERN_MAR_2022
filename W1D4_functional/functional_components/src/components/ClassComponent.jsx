// rcc
import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            person: this.props.person,
            animals: this.props.animals
        }
    }

    increaseNum = () => {
        console.log("click");
        // change state var
        // this.state.person.favNum += 1;
        // const increment = this.state.person.favNum + 1
        this.setState({ 
            person : {
                ...this.state.person,
                favNum: this.state.person.favNum + 1
            }
        }, () => console.log(this.state.person.favNum))
        // console.log(this.state.person.favNum);



    }


    render() {
        return (
            <fieldset>
                <legend>Class</legend>
                <p>
                    state: {JSON.stringify(this.state)}
                </p>
                <p>
                    number: {this.state.person.favNum}
                </p>
                <button onClick={() => this.increaseNum()}>click</button>
            </fieldset>
        )
    }
}
