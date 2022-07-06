import React from 'react';
import style from "./Search.module.css";

const Search = ({ onSubmitHandler, searchInput, inputSearchHandler }) => {
  
  return (
    <header className={style.searchFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={searchInput}
          placeholder="Search through your memory... "
          onChange={inputSearchHandler}
        />
        <button type="submit">SEARCH</button>
      </form>
    </header>
  );
};

export default Search;
