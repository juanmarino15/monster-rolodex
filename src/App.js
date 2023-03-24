import logo from "./logo.svg";
import "./App.css";
import { Component } from "react"; //for class component
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

//class component approach
class App extends Component {
	//when something is intantiated, first run constructur
	constructor() {
		super();

		//initializing state object
		this.state = {
			monsters: [],
			searchField: "", //adding a new property that keeps track of the search field and is accessible everywhere in the app
		};
	}

	//mounting is the first time a component gets dom rednedered. First time only
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users") //getting the data from the API
			.then(
				(response) =>
					//promise approach
					response.json() //parsing the json into objects
			)
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users }; //setting the array to the data from api
					},
					() => {
						//executes after
						console.log(this.state);
					}
				)
			);
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField: searchField }; //equal to searchField:searchField
		});
	};

	//constructor runs first, then render, then mount, then render again because mount changed the state
	render() {
		//do this to avoid using this everwhere
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className="app-title">Monsters Rolodex</h1>
				<SearchBox
					onChangeHandler={onSearchChange}
					placeholder="search monsters"
					className="search-box"
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
