import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  width: 120px;
  background: #ffffff;
  border: 2px solid rgba(96, 102, 208, 0.7);
  border-radius: 12px;
  color: rgba(96, 102, 208, 0.8);
  align-items: center;
  margin: 0;
  padding: 0;
  justify-content: center;
  font-family: var(--base-font);
  line-height: var(--base-line-height);

  &:hover {
    cursor: pointer;
    background: #f9a826;
    color: white;
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
