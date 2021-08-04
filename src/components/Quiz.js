import AnswerList from "./AnswerList";
import { getRandomInt } from "./CountryQuiz";

export const FlagBelongTo = ({ countryDatas }) => {
  const answerNum = getRandomInt(4);

  return (
    <div>
      <img className="img" src={countryDatas[answerNum].flag} alt="flag" />
      <h1 className="quest-sentense">
        Which country does this flag belong to?
      </h1>

      <ol>
        <AnswerList countryDatas={countryDatas} answer={answerNum} />
      </ol>
    </div>
  );
};

export const CityIsCapitalOf = ({ countryDatas }) => {
  const answerNum = getRandomInt(4);

  return (
    <div>
      <h1 className="quest-sentense">
        {countryDatas[answerNum].capital} is the capital of
      </h1>

      <ol>
        <AnswerList countryDatas={countryDatas} answer={answerNum} />
      </ol>
    </div>
  );
};
