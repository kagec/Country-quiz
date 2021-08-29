import { useState } from "react";
import AnswerList from "./AnswerList";
import { chooseCountry, getRandomInt } from "./CountryQuiz";
import Result from "./Result";
import AdventureIcon from "../image/undraw_adventure_4hum 1.svg";
import styled from "styled-components";

const QUIZ_LIST = {
  FlagBelongTo: ({ choseCountry, correctNumber }) => (
    <Question>
      <img src={choseCountry[correctNumber].flag} alt="flag" className="img" />
      <h1>Which country does this flag belong to?</h1>
    </Question>
  ),
  CityIsCapitalOf: ({ choseCountry, correctNumber }) => (
    <Question>
      <h1>{choseCountry[correctNumber].capital} is the capital of</h1>
    </Question>
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
    <QuizWrapper>
      {showResult ? (
        <Result scoreCount={scoreCount} initialize={initialize} />
      ) : (
        <QuizContainer>
          <AdvIcon src={AdventureIcon} alt="Icon" />

          <div>{QUIZ_LIST[questionType]({ choseCountry, correctNumber })}</div>
          <div>
            <AnswerOrderList>
              <AnswerList
                countryDatas={choseCountry}
                correctNumber={correctNumber}
                setAnswerIndex={setAnswerIndex}
                answerIndex={answerIndex}
              />
            </AnswerOrderList>
          </div>
          <QuizFooter>
            {answerIndex !== null && (
              <NextButton onClick={onClick}>Next</NextButton>
            )}
          </QuizFooter>
        </QuizContainer>
      )}
    </QuizWrapper>
  );
};

const QuizWrapper = styled.div`
  padding: 32px;
`;

const QuizContainer = styled.div`
  > div {
    margin-top: 32px;
  }
`;

const AdvIcon = styled.img`
  position: absolute;
  width: 162px;
  height: 116px;
  top: -74px;
  right: 0;
`;

const AnswerOrderList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;

  > li:not(:first-child) {
    margin-top: 32px;
  }
`;

const QuizFooter = styled.div`
  text-align: right;
`;

const Button = styled.button`
  display: inline-flex;
  width: 120px;
  background: #ffffff;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  color: rgba(96, 102, 208, 0.8);
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: center;
  font-family: var(--base-font);
  line-height: var(--base-line-height);

  &:hover {
    cursor: pointer;
    background: #f9a826;
    color: white;
    border-color: transparent;
  }
`;

const NextButton = styled(Button)`
  width: 116px;
  margin-left: auto;
  padding: 14px 0;
  font-weight: 700;
  font-size: 18px;
  color: #fff;

  background: #f9a826;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border-radius: 12px;
  border-color: transparent;
`;

const Question = styled.div`
  color: #2f527b;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }

  > h1:not(:first-child) {
    margin-top: 20px;
  }

  > .img {
    width: 84px;
    vertical-align: middle;

    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
    border-radius: 4px;
  }
`;

export default Quiz;
