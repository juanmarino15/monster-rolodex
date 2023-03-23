import logo from "./logo.svg";
import "./App.css";
import { Component } from "react"; //for class component

//class component approach
class App extends Component {
	//when something is intantiated, first run constructur
	constructor() {
		super();

		this.state = {
			monsters: [
				{
					id: 1,
					name: "Linda",
				},
				{
					id: 2,
					name: "Frank",
				},
				{
					id: 3,
					name: "Jacky",
				},
			],
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					//key value is something react uses to make it optimizedand quick. uses key value to associate changes
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
