import { useEffect, useState } from "react";
import AnswerList from "./AnswerList";
import { getRandomInt } from "./CountryQuiz";
import Result from "./Result";

const QUIZ_LIST = {
  FlagBelongTo: ({ countryDatas, correctNumber }) => (
    <div>
      <img src={countryDatas[correctNumber].flag} alt="flag" className="img" />
      <h1 className="question">Which country does this flag belong to?</h1>
    </div>
  ),
  CityIsCapitalOf: ({ countryDatas, correctNumber }) => (
    <h1 className="question">
      {countryDatas[correctNumber].capital} is the capital of
    </h1>
  ),
};

const QUIZ_NAME = Object.keys(QUIZ_LIST);
const QUIZ_LENGTH = QUIZ_NAME.length;

const Quiz = ({ countryDatas, correctNumber, scoreCount, setScoreCount }) => {
  const [answerIndex, setAnswerIndex] = useState(null);
  const [questionType, setQuestionType] = useState(
    QUIZ_NAME[getRandomInt(QUIZ_LENGTH)]
  );
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setQuestionType(QUIZ_NAME[getRandomInt(QUIZ_LENGTH)]);
  }, [scoreCount]);

  const onClick = () => {
    setAnswerIndex(null);

    if (correctNumber === answerIndex) {
      setScoreCount(scoreCount + 1);
    } else {
      setShowResult(true);
      if (scoreCount === 0) {
        setScoreCount(-1);
      }
    }
  };

  return showResult ? (
    <Result
      scoreCount={scoreCount}
      setScoreCount={setScoreCount}
      setShowResult={setShowResult}
    />
  ) : (
    <div>
      {QUIZ_LIST[questionType]({ countryDatas, correctNumber })}
      <ol>
        <AnswerList
          countryDatas={countryDatas}
          correctNumber={correctNumber}
          setAnswerIndex={setAnswerIndex}
          answerIndex={answerIndex}
        />
      </ol>
      <button className="btn-next" onClick={() => onClick()}>
        NEXT
      </button>
    </div>
  );
};

export default Quiz;
