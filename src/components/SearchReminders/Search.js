import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reminderFilter } from "../../store/reminders";
import style from "./Search.module.css";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const inputSearchHandler = (event) => {
    setSearchInput(event.target.value);
    dispatch(reminderFilter(event.target.value))
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // dispatch(reminderFilter(searchInput));

    setSearchInput("");
  };

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
