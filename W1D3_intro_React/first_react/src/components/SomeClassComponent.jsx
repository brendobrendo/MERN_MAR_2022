import React, { Component } from "react";
// import Second from "./Second";

class SomeClassComponent extends Component {

    render() {

        console.log(this.props);
        console.log(this.props.person);

        
        return (
            <fieldset>
                <legend>SomeClassComponents</legend>
                <div> hello from Some other Component </div>
                <p>hello</p>
                <p>
                    x from App.js is  {this.props.person.name}
                </p>
                {/* <Second animals={this.props.animals}/> */}
            </fieldset>
        )
    }
}

export default SomeClassComponent;