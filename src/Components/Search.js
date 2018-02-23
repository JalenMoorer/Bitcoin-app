import React from 'react'; 


const Search = (props) => {
  const { search, onChange, onSubmit } = props;

  return (

      <form onSubmit={onSubmit}>
        <div className="form-row">
      <div className="col-10">
        <input className="form-control"
          id="inlineFormInput"
          type="text"
          value={search}
          placeholder="Search for address "
          onChange={onChange}
          name="search"
        />
    </div>
    <div className="col-2">
      <input
        type="submit"
        name="submit"
        onClick={onSubmit}
        className="btn btn-outline-success form-control"
        value="Search"
        />
    </div>
      </div>
  </form>

  );
}

export default Search;
