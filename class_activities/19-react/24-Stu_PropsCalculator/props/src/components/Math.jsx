import React from "react";

function Math(props) {
    console.log(props);
    switch (props.operator) {
        case "+":
            return (<div><p>{props.num1} + {props.num2} = {parseInt(props.num1) + parseInt(props.num2)}</p></div>);
        case "-":
            return (<div><p>{props.num1} - {props.num2} = {parseInt(props.num1) - parseInt(props.num2)}</p></div>);
        case "*":
            return (<div><p>{props.num1} * {props.num2} = {parseInt(props.num1) * parseInt(props.num2)}</p></div>);
        case "/":
            return (<div><p>{props.num1} / {props.num2} = {parseInt(props.num1) / parseInt(props.num2)}</p></div>);
        default:
            return (<div><p>Error</p></div>);
    }
}

export default Math;
