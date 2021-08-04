import { useState } from "react";

const AnswerList = ({ countryDatas, answer }) => {
  const [isPressed, setIsPressed] = useState(false);

  if (!isPressed) {
    countryDatas.map((data) => {
      data.isPressed = false;
      return data;
    });
  }

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
              setIsPressed(!isPressed);
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
