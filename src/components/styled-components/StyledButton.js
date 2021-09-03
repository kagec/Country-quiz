import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  background: #fff;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  color: rgba(96, 102, 208, 0.8);
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: center;
  font-family: var(--base-font);
  line-height: var(--base-line-height);
  font-size: 18px;

  &:hover:not(:disabled) {
    cursor: pointer;
    background: #f9a826;
    color: #fff;
    border-color: transparent;
  }
`;

export const NextButton = styled(Button)`
  width: 116px;
  margin-left: auto;
  padding: 14px 0;
  font-weight: 700;
  font-size: 18px;
  color: #fff;

  background: #f9a826;
  box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);
  border-radius: 12px;
  border-color: transparent;
`;

export const TryAgainButton = styled(Button)`
  width: 209px;
  border: 2px solid #1d355d;
  font-weight: 600;
  font-size: 18px;
  color: #1d355d;
  padding: 16px 0;
`;

export const AnswerButton = styled(Button)`
  width: 100%;
  padding: 10px 18px;
  font-weight: 500;
`;
