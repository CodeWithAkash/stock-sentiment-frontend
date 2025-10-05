import React from "react";

const SearchBar = ({ company, setCompany, onSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button onClick={onSearch}>Analyze</button>
    </>
  );
};

export default SearchBar;
