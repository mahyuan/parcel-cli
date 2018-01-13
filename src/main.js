import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/common.css";

let rootElement = document.getElementById('root');
if(!rootElement) {
	rootElement = document.createElement('div');
}

render(<App />, rootElement);




