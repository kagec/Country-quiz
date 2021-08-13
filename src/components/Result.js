const Result = ({ scoreCount, setScoreCount, setShowResult }) => {
  const onClick = () => {
    setShowResult(false);
    setScoreCount(0);
  };

  return (
    <div>
      <h2>Results</h2>
      <p>You got {scoreCount === -1 ? 0 : scoreCount} correct answer</p>
      <button onClick={() => onClick()}>Try again</button>
    </div>
  );
};

export default Result;
