import { useState } from "react";

const AnswerList = ({ countryDatas }) => {
  const [isPressed, setIsPressed] = useState(false);

  return countryDatas.map((data) => (
    <li>
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
  ));
};

export default AnswerList;
