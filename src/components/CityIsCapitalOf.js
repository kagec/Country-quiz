import { getRandomInt } from "./CountryQuiz";

const CityIsCapitalOf = ({ countryDatas }) => {
  return (
    <div>
      <h1 className="quest-sentense">
        {!countryDatas ? "" : countryDatas[getRandomInt(4)].capital} is the
        capital of
      </h1>
      <button className="btn-answer">
        {!countryDatas ? "" : countryDatas[0].name}
      </button>
      <button className="btn-answer">
        {!countryDatas ? "" : countryDatas[1].name}
      </button>
      <button className="btn-answer">
        {!countryDatas ? "" : countryDatas[2].name}
      </button>
      <button className="btn-answer">
        {!countryDatas ? "" : countryDatas[3].name}
      </button>
    </div>
  );
};

export default CityIsCapitalOf;
