import styled from "styled-components";
import ResultIcon from "../image/undraw_winners_ao2o 2.svg";
import { Button } from "./styled-components/StyledButton";

const Result = ({ scoreCount, initialize }) => {
  return (
    <ResultPage>
      <div>
        <ResultImg src={ResultIcon} alt="Result Icon" />
      </div>
      <Score>
        <h2>Results</h2>
        <p>
          You got <ScoreCount>{scoreCount}</ScoreCount> correct answer
        </p>
      </Score>
      <div>
        <TryAgainButton onClick={initialize}>Try again</TryAgainButton>
      </div>
    </ResultPage>
  );
};

const ResultPage = styled.div`
  text-align: center;
  color: #1d355d;

  > div {
    margin-top: 18px;

    &:not(:first-child) {
      margin-top: 72px;
    }
  }
`;

const ResultImg = styled.img`
  vertical-align: middle;
  width: 238px;
`;

const Score = styled.div`
  > h2 {
    font-weight: 700;
    font-size: 48px;
    margin: 0;
  }

  > p {
    font-size: 18px;
    margin: 0;
  }
`;

const ScoreCount = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: rgb(135, 205, 155);
`;

const TryAgainButton = styled(Button)`
  width: 209px;
  border: 2px solid #1d355d;
  font-weight: 600;
  color: #1d355d;
  padding: 16px 0;
`;

export default Result;
