import { useState } from "react";
import AnswerList from "./AnswerList";
import { chooseCountry, getRandomInt } from "./CountryQuiz";
import Result from "./Result";
import AdventureIcon from "../image/undraw_adventure_4hum 1.svg";

const QUIZ_LIST = {
  FlagBelongTo: ({ choseCountry, correctNumber }) => (
    <div>
      <img src={choseCountry[correctNumber].flag} alt="flag" className="img" />
      <h1 className="question">Which country does this flag belong to?</h1>
    </div>
  ),
  CityIsCapitalOf: ({ choseCountry, correctNumber }) => (
    <h1 className="question questionMargin">
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

  const onClick = () => {
    setAnswerIndex(null);

    if (correctNumber === answerIndex) {
      setScoreCount(scoreCount + 1);
      setChoseCountry(chooseCountry(countryDatas));
      setCorrectNumber(getRandomInt(4));
      setQuestionType(QUIZ_NAME[getRandomInt(QUIZ_LENGTH)]);
    } else {
      setShowResult(true);
    }
  };

  const initialize = () => {
    setShowResult(false);
    setScoreCount(0);
    setChoseCountry(chooseCountry(countryDatas));
    setCorrectNumber(getRandomInt(4));
    setQuestionType(QUIZ_NAME[getRandomInt(QUIZ_LENGTH)]);
  };

  return showResult ? (
    <Result scoreCount={scoreCount} initialize={initialize} />
  ) : (
    <div>
      <img className="advIcon" src={AdventureIcon} alt="Icon" />

      {QUIZ_LIST[questionType]({ choseCountry, correctNumber })}
      <ol className="bl_quizApp_ol">
        <AnswerList
          countryDatas={choseCountry}
          correctNumber={correctNumber}
          setAnswerIndex={setAnswerIndex}
          answerIndex={answerIndex}
        />
      </ol>
      {answerIndex !== null && (
        <button className="btn-next" onClick={onClick}>
          NEXT
        </button>
      )}
    </div>
  );
};

export default Quiz;
