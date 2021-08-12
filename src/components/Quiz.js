import { useState } from "react";
import AnswerList from "./AnswerList";
import { getRandomInt } from "./CountryQuiz";
import Result from "./Result";

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

const Quiz = ({ countryDatas, answerNum, scoreCount, setScoreCount }) => {
  const [isAnswered, setIsAnswered] = useState(null);
  const [questionType, setQuestionType] = useState(
    QUIZ_NAME[getRandomInt(QUIZ_LENGTH)]
  );
  const [isMiss, setIsMiss] = useState(false);

  const onClick = () => {
    const dataIndex = countryDatas.findIndex((data) => data.isPressed === true);
    setIsAnswered(null);

    if (answerNum === dataIndex) {
      setScoreCount(scoreCount + 1);
    } else {
      setIsMiss(true);
    }
  };

  return isMiss ? (
    <Result scoreCount={scoreCount} />
  ) : (
    <div>
      {QUIZ_LIST[questionType]({ countryDatas, answerNum })}
      <ol>
        <AnswerList
          countryDatas={countryDatas}
          answerNum={answerNum}
          setIsAnswered={setIsAnswered}
          isAnswered={isAnswered}
        />
      </ol>
      {isAnswered === null ? null : (
        <button className="btn-next" onClick={() => onClick()}>
          NEXT
        </button>
      )}
    </div>
  );
};

export default Quiz;
