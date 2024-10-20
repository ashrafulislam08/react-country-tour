import CountryData from "../CountryData/CountryData";

const CountryDetail = ({
  country,
  handleVisitedCountry,
  handleVisitedFlags,
}) => {
  return (
    <div>
      <h3>Country Detail</h3>
      <hr />
      <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      />
    </div>
  );
};

export default CountryDetail;
