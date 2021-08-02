import { getRandomInt } from "./CountryQuiz";

const FlagBelongTo = ({ countryDatas }) => {
  return (
    <div>
      <img
        className="img"
        src={!countryDatas ? null : countryDatas[getRandomInt(4)].flag}
        alt="flag"
      />
      <h1 className="quest-sentense">
        Which country does this flag belong to?
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

export default FlagBelongTo;
