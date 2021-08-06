import { useState } from "react";

const AnswerList = ({ countryDatas }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div>
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
            }}
          >
            {data.name}
          </button>
        </li>
      ))}
    </div>
  );
};

export default AnswerList;
