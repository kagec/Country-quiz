import styled, { css } from "styled-components";
import { Button } from "./styled-components/StyledButton";

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
        onClick={() => {
          if (answerIndex === null) {
            setAnswerIndex(index);
          }
        }}
        correct={answerIndex != null && index === correctNumber}
        selected={answerIndex === index}
        disabled={answerIndex != null}
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
  text-align: left;
  width: 100%;
  word-break: break-word;
`;

const MaterialIcons = styled.span`
  font-size: 20px;
`;

const AnswerButton = styled(Button)`
  width: 100%;
  padding: 10px 18px;
  font-weight: 500;

  ${({ selected, correct }) => css`
    ${correct &&
    `
      background: #60bf88;
      border-color: #60bf88;
    `}

    ${!correct &&
    selected &&
    `
      background: #ea8282;
      border-color: #ea8282;
    `}

    ${(correct || selected) &&
    `
      color: #fff;
    `}
  `}
`;

export default AnswerList;
