import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
import { Monster } from "../../App";

type CardListProps = {
	monsters: Monster[];
};

//function appraoch, the destructoring can happen in the props section
const CardList = ({ monsters }: CardListProps) => {
	return (
		//mno return statement is implicit return
		<div className="card-list">
			{monsters.map((monster) => {
				return <Card monster={monster} key={monster.id} />;
			})}
		</div>
	);
};

//class approach
// class CardList extends Component {
// 	render() {
// 		//console.log(this.props); //props show a key (name of prop) and value(whatever you passed)
// 		const { monsters } = this.props;
// 		return (
// 			<div className="card-list">
// 				{monsters.map((monster) => {
// 					return <Card monster={monster} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;
