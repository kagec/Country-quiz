import { useState } from "react";

const AnswerList = ({ countryDatas, answer }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      {countryDatas.map((data, index) => (
        <li key={index}>
          <button
            className={`btn-answer ${answer === index ? "correct" : ""}`}
            aria-pressed={isPressed}
            onClick={() => {
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
