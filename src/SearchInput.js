import { useState } from "react";
import babyNamesData from "./data/babyNamesData.json";

function SearchInput() {
  const [listNames, setListNames] = useState([]);
  // const [displaySearchedNames, setDisplaySearchedNames] = useState("")

  function DisplaySearchedNames(event) {
    const matchedNames = babyNamesData.filter((el) =>
      el.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setListNames(matchedNames);
  }

  return (
    <div>
      <input
        className="searchInput"
        type="text"
        value={listNames}
        onChange={DisplaySearchedNames}
        placeholder="Search for a name"
      />
      <button>&#128037;</button>
      <button>&#128330;</button>
      <button>&#128035;</button>
      <h2 className="favorites">Favorites:</h2>
      {/* <li className="displaySearchedNames">{listNames}</li> */}
    </div>
  );
}

export default SearchInput;
