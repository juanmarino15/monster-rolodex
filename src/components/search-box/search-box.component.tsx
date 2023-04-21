import "./search-box.styles.css";
import { ChangeEvent } from "react";

//always declare variables in typescript

//interface approach
interface ISearchBoxProps {
	className: string;
	placeholder?: string;
}

interface ISearchBoxProps {
	onChangeHandler: (a: string) => void;
}

//type approache to declare
type SearchBoxProps = {
	className: string;
	placeholder?: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; //defining your own function with generics
	// onChangeHandler: ChangeEventHandler<HTMLInputElement>; //generics
};

const SearchBox = ({
	className,
	placeholder,
	onChangeHandler,
}: SearchBoxProps) => (
	<input
		className={`search-box ${className}`}
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
