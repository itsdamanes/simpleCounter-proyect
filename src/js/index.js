//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

const counterBoxes = document.querySelector('.digit-box');

let second = 0;

function updateDigitCounter() {
    const digit = second.toString().padStart(6, '0');

    for (let i = 0; i < second.length; i++) {
        second[i].textContent = digit[i];
    }
}