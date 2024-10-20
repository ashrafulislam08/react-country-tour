import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country  ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>
        Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code {cca3}</p>
      <button
        onClick={() => handleVisitedCountry(country)}
        style={{ marginRight: "10px" }}
      >
        Mark as visited
      </button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? (
        <h4>I have visited this country</h4>
      ) : (
        <h4>I want to visit</h4>
      )}
    </div>
  );
};

export default Country;
