import "./SearchBar.css";
import React, { useContext, useState } from "react";
import { ContextTest } from "../../contexts/ContextTest";

function SearchBar() {
  const { handleSubmit } = useContext(ContextTest);
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
