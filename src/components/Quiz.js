import AnswerList from "./AnswerList";
import { getRandomInt } from "./CountryQuiz";

const QUIZ_LIST = {
  FlagBelongTo: ({ countryDatas, answerNum }) => (
    <div>
      <img src={countryDatas[answerNum].flag} alt="flag" className="img" />
      <h1 className="question">Which country does this flag belong to?</h1>
    </div>
  ),
  CityIsCapitalOf: ({ countryDatas, answerNum }) => (
    <h1 className="question">
      {countryDatas[answerNum].capital} is the capital of
    </h1>
  ),
};

const QUIZ_NAME = Object.keys(QUIZ_LIST);
const QUIZ_LENGTH = QUIZ_NAME.length;

const Quiz = ({ countryDatas, answerNum }) => {
  const questionType = QUIZ_NAME[getRandomInt(QUIZ_LENGTH)];

  return (
    <div>
      {QUIZ_LIST[questionType]({ countryDatas, answerNum })}
      <ol>
        <AnswerList countryDatas={countryDatas} answerNum={answerNum} />
      </ol>
    </div>
  );
};

export default Quiz;
