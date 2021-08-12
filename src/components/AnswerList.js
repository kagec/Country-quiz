const AnswerList = ({ countryDatas, answerNum, setIsAnswered, isAnswered }) => {
  return countryDatas.map((data, index) => (
    <li key={index}>
      <button
        className={`btn-answer 
        ${isAnswered !== null && index === answerNum ? "correct" : ""}
        ${isAnswered === index && index !== answerNum ? "incorrect" : ""}

         `}
        onClick={() => {
          if (isAnswered === null) {
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
