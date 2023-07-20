import React from "react";

const Search = (props) => {
  return (
    <div>
      <h2> Search Person </h2>
      <form>
        <label> Name </label>
        <input value={props.searchPerson} onChange={props.handleSearchPerson} />
        <button type="submit" onClick={props.SearchPerson}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;