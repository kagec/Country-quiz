import styled from "styled-components";
import { AnswerButton } from "./styled-components/StyledButton";

const ALPHABET_INDEX = "ABCD";

const AnswerList = ({
  countryDatas,
  correctNumber,
  setAnswerIndex,
  answerIndex,
}) => {
  return countryDatas.map((data, index) => (
    <li key={index}>
      <AnswerButton
        className={`
        ${answerIndex !== null && index === correctNumber ? "correct" : ""}
        ${answerIndex === index ? "incorrect" : ""}
         `}
        onClick={() => {
          if (answerIndex === null) {
            setAnswerIndex(index);
          }
        }}
      >
        <AlphabetIndex>{ALPHABET_INDEX[index]}</AlphabetIndex>
        <DataName>{data.name}</DataName>
        {answerIndex !== null &&
        answerIndex === index &&
        !(index === correctNumber) ? (
          <MaterialIcons className="material-icons">
            highlight_off
          </MaterialIcons>
        ) : null}
        {answerIndex !== null && index === correctNumber ? (
          <MaterialIcons className="material-icons">
            check_circle_outline
          </MaterialIcons>
        ) : null}
      </AnswerButton>
    </li>
  ));
};

const AlphabetIndex = styled.span`
  font-size: 24px;
`;

const DataName = styled.span`
  margin: 0 18px 0 40px;
  font-size: 18px;
  text-align: left;
  width: 100%;
  word-break: break-word;
`;

const MaterialIcons = styled.span`
  font-size: 20px;
`;

export default AnswerList;
