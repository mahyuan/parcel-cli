import React, { Component } from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { Icon, Progress, Layout, Slider } from "antd";
// const { Header, Content, Footer } = Layout;


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.render = this.render.bind(this);
		this.state = {
			items: this.props.items,
			disabled: true
		};
	}

	ComponentDidMount() {
		this.setState({
			disabled: false
		})
	}

	handleClick() {
		this.setState({
			items: this.state.items.concat('Item' + this.state.items.length )

		})
	}

	render() {
		return (
			<div>
				<div className="titel">hello world</div>
				<button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Add Item</button>
				<ul>
					{
						this.state.items.map( item => {
							<li>{item}</li>
						})
					}
				</ul>
			</div>
		)
	}
}





