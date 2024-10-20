import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
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
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>{" "}
      <br />
      {visited ? "I have visited this country" : "I want to visit"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      />
    </div>
  );
};

export default Country;
