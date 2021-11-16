// import { render } from "@testing-library/react";
import React from "react";

 export default class  Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {count :56};
        this.reset = this.reset.bind(this);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
    }
    reset() {
        console.log("Reset Clicked");
        this.setState({count:0})
    }
    plus() {
        
        this.setState((prevState) => {
        console.log("Plus Clicked");
        return{count : prevState.count + 1};
        });
    }
    minus() {
        this.setState((prevState) =>{
            return {count : prevState.count -1};
        });
    }

    render() {
        return (
            <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus }>Minus</button>
        <button onClick={this.reset}>Reset</button>
        </div>
        );
    }
};







