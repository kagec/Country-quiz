import ResultIcon from "../image/undraw_winners_ao2o 2.svg";

const Result = ({ scoreCount, initialize }) => {
  return (
    <div className="ly_result">
      <div>
        <img src={ResultIcon} alt="Result Icon" />
      </div>
      <div className="score">
        <h2>Results</h2>
        <p>
          You got <span>{scoreCount}</span> correct answer
        </p>
      </div>
      <button className="btn btn-tryAgain" onClick={() => initialize()}>
        <span>Try again</span>
      </button>
    </div>
  );
};

export default Result;
