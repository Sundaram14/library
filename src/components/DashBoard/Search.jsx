import React from "react";
import './DashBoard.css'

function Search({ term, searchKeyword }) {
	function handleSearch(e) {
		searchKeyword(e.target.value);
	}
	return (
		<div className="center">
			<input
				className="input-field"
				type="text"
				value={term}
				placeholder="Search your book"
				onChange={handleSearch}
			></input>
		</div>
	);
}

export default Search;