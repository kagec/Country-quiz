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
