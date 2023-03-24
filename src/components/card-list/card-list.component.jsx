import { Component } from "react";

class CardList extends Component {
	render() {
		//console.log(this.props); //props show a key (name of prop) and value(whatever you passed)
		const { monsters } = this.props;
		return (
			<div>
				{monsters.map((monster) => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default CardList;
