const AnswerList = ({
  countryDatas,
  correctNumber,
  setAnswerIndex,
  answerIndex,
}) => {
  return countryDatas.map((data, index) => (
    <li key={index}>
      <button
        className={`btn-answer 
        ${answerIndex !== null && index === correctNumber ? "correct" : ""}
        ${answerIndex === index ? "incorrect" : ""}

         `}
        onClick={() => {
          if (answerIndex === null) {
            setAnswerIndex(index);
          }
        }}
      >
        {data.name}
      </button>
    </li>
  ));
};

export default AnswerList;
