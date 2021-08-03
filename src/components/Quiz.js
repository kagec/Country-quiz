import AnswerList from "./AnswerList";
import { getRandomInt } from "./CountryQuiz";

export const FlagBelongTo = ({ countryDatas }) => {
  return (
    <div>
      <img
        className="img"
        src={countryDatas[getRandomInt(4)].flag}
        alt="flag"
      />
      <h1 className="quest-sentense">
        Which country does this flag belong to?
      </h1>

      <ol>
        <AnswerList countryDatas={countryDatas} />
      </ol>
    </div>
  );
};

export const CityIsCapitalOf = ({ countryDatas }) => {
  return (
    <div>
      <h1 className="quest-sentense">
        {countryDatas[getRandomInt(4)].capital} is the capital of
      </h1>

      <ol>
        <AnswerList countryDatas={countryDatas} />
      </ol>
    </div>
  );
};
