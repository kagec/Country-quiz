import AnswerList from "./AnswerList";
import { getRandomInt } from "./CountryQuiz";

const Quiz = ({ countryDatas, answerNum }) => {
  const FlagBelongTo = ({ countryDatas, answerNum }) => {
    countryDatas.map((data, index) => {
      data.isCorrect = answerNum === index ? true : false;
      return data;
    });

    return (
      <div>
        <img className="img" src={countryDatas[answerNum].flag} alt="flag" />
        <h1 className="question">Which country does this flag belong to?</h1>

        <ol>
          <AnswerList countryDatas={countryDatas} />
        </ol>
      </div>
    );
  };

  const CityIsCapitalOf = ({ countryDatas, answerNum }) => {
    countryDatas.map((data, index) => {
      data.isCorrect = answerNum === index ? true : false;
      return data;
    });

    return (
      <div>
        <h1 className="question">
          {countryDatas[answerNum].capital} is the capital of
        </h1>

        <ol>
          <AnswerList countryDatas={countryDatas} />
        </ol>
      </div>
    );
  };

  return (
    <div>
      {!getRandomInt(2) ? (
        <CityIsCapitalOf countryDatas={countryDatas} answerNum={answerNum} />
      ) : (
        <FlagBelongTo countryDatas={countryDatas} answerNum={answerNum} />
      )}
    </div>
  );
};

export default Quiz;
