const AnswerList = ({
  countryDatas,
  answerNum,
  setIsAnswered,
  isPressed,
  setIsPressed,
}) => {
  return countryDatas.map((data, index) => (
    <li key={index}>
      <button
        className={`btn-answer 
        ${isPressed && index === answerNum ? "correct" : ""}
        ${data.isPressed && index !== answerNum ? "incorrect" : ""}

         `}
        onClick={() => {
          if (!isPressed) {
            data.isPressed = true;
            setIsPressed(true);
            setIsAnswered(index);
          }
        }}
      >
        {data.name}
      </button>
    </li>
  ));
};

export default AnswerList;
