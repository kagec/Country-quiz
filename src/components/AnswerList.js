import { BiCheckCircle, BiXCircle } from "react-icons/bi";

const ALPHABET_INDEX = "ABCD";

const AnswerList = ({
  countryDatas,
  correctNumber,
  setAnswerIndex,
  answerIndex,
}) => {
  return countryDatas.map((data, index) => (
    <li key={index}>
      <button
        className={`btn btn-answer 
        ${answerIndex !== null && index === correctNumber ? "correct" : ""}
        ${answerIndex === index ? "incorrect" : ""}

         `}
        onClick={() => {
          if (answerIndex === null) {
            setAnswerIndex(index);
          }
        }}
      >
        <span className="alphabetIndex">{ALPHABET_INDEX[index]}</span>
        <span className="dataName">{data.name}</span>
        {answerIndex !== null &&
        answerIndex === index &&
        !(index === correctNumber) ? (
          <BiXCircle size={15} className="mark" />
        ) : null}
        {answerIndex !== null && index === correctNumber ? (
          <BiCheckCircle size={15} className="mark" />
        ) : null}
      </button>
    </li>
  ));
};

export default AnswerList;
