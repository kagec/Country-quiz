const Result = ({ scoreCount, initialize }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>You got {scoreCount} correct answer</p>
      <button onClick={() => initialize()}>Try again</button>
    </div>
  );
};

export default Result;
