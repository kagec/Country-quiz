import { chooseCountry, getRandomInt } from "./CountryQuiz";

const Result = ({
  scoreCount,
  setScoreCount,
  setShowResult,
  setChoseCountry,
  countryDatas,
  setCorrectNumber,
}) => {
  const onClick = () => {
    setShowResult(false);
    setScoreCount(0);
    setChoseCountry(chooseCountry(countryDatas));
    setCorrectNumber(getRandomInt(4));
  };

  return (
    <div>
      <h2>Results</h2>
      <p>You got {scoreCount} correct answer</p>
      <button onClick={() => onClick()}>Try again</button>
    </div>
  );
};

export default Result;
