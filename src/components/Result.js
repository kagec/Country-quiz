import ResultIcon from "../image/undraw_winners_ao2o 2.svg";

const Result = ({ scoreCount, initialize }) => {
  return (
    <div>
      <img src={ResultIcon} alt="Result Icon" />
      <h2>Results</h2>
      <p>You got {scoreCount} correct answer</p>
      <button onClick={() => initialize()}>Try again</button>
    </div>
  );
};

export default Result;
