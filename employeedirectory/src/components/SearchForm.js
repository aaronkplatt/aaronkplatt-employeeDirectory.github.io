import React from "react";
import './styles.css'

function SearchForm(props) {
  return (
    <form className="searchBar" onSubmit={props.handleFormSubmit}>
      <div className="form-group align-items-center justify-content-start">
        <label htmlFor="search">Search For Employee's Below</label>
        <input
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee's Name"
          id="search"
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
}

export default SearchForm;