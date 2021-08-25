import { useState } from "react";
import AnswerList from "./AnswerList";
import { chooseCountry, getRandomInt } from "./CountryQuiz";
import Result from "./Result";
import AdventureIcon from "../image/undraw_adventure_4hum 1.svg";

const QUIZ_LIST = {
  FlagBelongTo: ({ choseCountry, correctNumber }) => (
    <div className="question">
      <img src={choseCountry[correctNumber].flag} alt="flag" className="img" />
      <h1>Which country does this flag belong to?</h1>
    </div>
  ),
  CityIsCapitalOf: ({ choseCountry, correctNumber }) => (
    <div className="question">
      <h1>{choseCountry[correctNumber].capital} is the capital of</h1>
    </div>
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

  return (
    <div className="quizWrapper">
      {showResult ? (
        <Result scoreCount={scoreCount} initialize={initialize} />
      ) : (
        <div className="quizContainer">
          <img className="advIcon" src={AdventureIcon} alt="Icon" />

          <div>{QUIZ_LIST[questionType]({ choseCountry, correctNumber })}</div>
          <div>
            <ol className="answerList">
              <AnswerList
                countryDatas={choseCountry}
                correctNumber={correctNumber}
                setAnswerIndex={setAnswerIndex}
                answerIndex={answerIndex}
              />
            </ol>
          </div>
          <div className="footer">
            {answerIndex !== null && (
              <button className="btn btnNext" onClick={onClick}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
