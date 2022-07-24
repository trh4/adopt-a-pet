import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

// import useHistory here.

const Search = () => {
  // get the history object here
  const history = useHistory();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirect with history.push()
    history.push('/search/?' + searchQuery);
  };

  return (
    <form className="search-form">
      <input  onChange={onSearchHandler} type="text" className="search" ref={searchInputRef} />
      {/* <button type="submit" className="search-button">
        🔎
      </button> */}
    </form>
  );
};

export default Search;
