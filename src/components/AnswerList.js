import { useState } from "react";

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
            onClick={() => {
              data.isPressed = true;
              setIsPressed(true);
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
