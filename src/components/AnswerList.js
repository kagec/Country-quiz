import { useState } from "react";

const AnswerList = ({ countryDatas, answerNum }) => {
  const [isPressed, setIsPressed] = useState(false);

  return countryDatas.map((data, index) => (
    <li key={index}>
      <button
        className={`btn-answer 
        ${isPressed && index === answerNum ? "correct" : ""}
        ${data.isPressed && index !== answerNum ? "incorrect" : ""}

         `}
        onClick={() => {
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
