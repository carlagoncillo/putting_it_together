import React, { Component } from "react";

class PersonCard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            age: this.props.age
        };
    }

    changeAge = () => {
            this.setState({age: this.state.age + 1});
            // this will work as a string if you use didnt use an array at app.js it has to be an array
            // or else you have to call person : then all the functionalities
    };

    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.changeAge}>Birthday Button For {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}
export default PersonCard