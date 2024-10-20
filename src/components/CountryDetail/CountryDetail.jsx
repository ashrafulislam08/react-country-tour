import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  return (
    <div>
      <h3>Country Detail</h3>
      <hr />
      <CountryData {...props} />
    </div>
  );
};

export default CountryDetail;
