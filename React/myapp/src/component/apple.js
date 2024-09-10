import React from "react";

class Apple extends React.Component{
    render(){
        const {fruitshop} = this.props;
        const {name, colour} = fruitshop;

        return (
            <div>
                <p>I have a fruit {name} and its colour is {colour}</p>

            </div>
        )
    }
}

export default Apple;
