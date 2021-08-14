import { useEffect, useState } from "react";
import AnswerList from "./AnswerList";
import { chooseCountry, getRandomInt } from "./CountryQuiz";
import Result from "./Result";

const QUIZ_LIST = {
  FlagBelongTo: ({ choseCountry, correctNumber }) => (
    <div>
      <img src={choseCountry[correctNumber].flag} alt="flag" className="img" />
      <h1 className="question">Which country does this flag belong to?</h1>
    </div>
  ),
  CityIsCapitalOf: ({ choseCountry, correctNumber }) => (
    <h1 className="question">
      {choseCountry[correctNumber].capital} is the capital of
    </h1>
  ),
};

const QUIZ_NAME = Object.keys(QUIZ_LIST);
const QUIZ_LENGTH = QUIZ_NAME.length;

const Quiz = ({ countryDatas }) => {
  const [answerIndex, setAnswerIndex] = useState(null);
  const [questionType, setQuestionType] = useState(
    QUIZ_NAME[getRandomInt(QUIZ_LENGTH)]
  );
  const [showResult, setShowResult] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [choseCountry, setChoseCountry] = useState(chooseCountry(countryDatas));
  const [correctNumber, setCorrectNumber] = useState(getRandomInt(4));

  useEffect(() => {
    setQuestionType(QUIZ_NAME[getRandomInt(QUIZ_LENGTH)]);
  }, [scoreCount]);

  const onClick = () => {
    setAnswerIndex(null);

    if (correctNumber === answerIndex) {
      setScoreCount(scoreCount + 1);
      setChoseCountry(chooseCountry(countryDatas));
      setCorrectNumber(getRandomInt(4));
    } else {
      setShowResult(true);
    }
  };

  return showResult ? (
    <Result
      scoreCount={scoreCount}
      setScoreCount={setScoreCount}
      setShowResult={setShowResult}
      setChoseCountry={setChoseCountry}
      countryDatas={countryDatas}
      setCorrectNumber={setCorrectNumber}
    />
  ) : (
    <div>
      {QUIZ_LIST[questionType]({ choseCountry, correctNumber })}
      <ol>
        <AnswerList
          countryDatas={choseCountry}
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
