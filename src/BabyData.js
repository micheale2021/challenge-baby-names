import babyNamesData from "./data/babyNamesData.json";

function BabyData() {
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search for a name"
      />
      <button>&#128037;</button>
      <button>&#128330;</button>
      <button>&#128035;</button>
      <h2 className="favorites">Favorites:</h2>
      <hr width="70%" />
      <ul className="list-names">
        {babyNamesData.map((data) => {
          if (data.sex === "f") {
            return <li className="list-name-girls">{data.name}</li>;
          } else {
            return <li className="list-name-boys">{data.name}</li>;
          }
        })}
      </ul>
      <hr width="70%" />
    </div>
  );
}

export default BabyData;
