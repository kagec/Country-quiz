import ResultIcon from "../image/undraw_winners_ao2o 2.svg";

const Result = ({ scoreCount, initialize }) => {
  return (
    <div className="result">
      <div>
        <img src={ResultIcon} alt="Result Icon" />
      </div>
      <div className="score">
        <h2>Results</h2>
        <p>
          You got <span>{scoreCount}</span> correct answer
        </p>
      </div>
      <div>
        <button className="btn btnTryAgain" onClick={() => initialize()}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default Result;
