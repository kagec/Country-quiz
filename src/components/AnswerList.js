import { useState } from "react";

const sleep = async (ms) => new Promise((r) => setTimeout(r, ms));

const AnswerList = ({
  countryDatas,
  clearCount,
  setClearCount,
  setIsWrong,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      {countryDatas.map((data, index) => (
        <li key={index}>
          <button
            className={`btn-answer ${
              data.isCorrect
                ? "correct"
                : data.isCorrect === false && data.isPressed
                ? "incorrect"
                : ""
            } `}
            aria-pressed={isPressed}
            onClick={async () => {
              data.isPressed = true;
              setIsPressed(true);
              await sleep(1000);
              setIsPressed(false);
              if (data.isPressed && data.isCorrect) {
                setClearCount(clearCount + 1);
              } else {
                setIsWrong(true);
              }
            }}
          >
            {data.name}
          </button>
        </li>
      ))}
    </>
  );
};

export default AnswerList;
