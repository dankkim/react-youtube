import React, { useRef } from "react";
// import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    console.log("click");
    handleSearch();
  };

  return (
    <header>
      <input
        type="text"
        placeholder="검색"
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onClick}>
        검색
      </button>
    </header>
  );
};

export default SearchHeader;
