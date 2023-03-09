import { useRef, useState } from "react";

export default function SearchBar(props) {
  const inputRef = useRef(null);

  const handleClick = () => {
    props.setSearchQuery(inputRef.current.value);
  };

  return (
    <div className="search-bar">
      Search for:
      <input ref={inputRef} type="text" name="searchQ" />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
      <h2>{props.searchQuery}</h2>
      {props.searchOffset == 0 ? (
        ""
      ) : (
        <button
          onClick={() => {
            props.setSearchOffset(props.searchOffset - 10);
            console.log(props.searchOffset);
          }}
        >
          Previous Page
        </button>
      )}
      {props.searchQuery == "" ? (
        ""
      ) : (
        <button
          onClick={() => {
            props.setSearchOffset(props.searchOffset + 10);
            console.log(props.searchOffset);
          }}
        >
          Next Page
        </button>
      )}
    </div>
  );
}
