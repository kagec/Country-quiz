const IsAnswered = ({ answerIndex, children }) => {
  return answerIndex === null ? null : <div>{children}</div>;
};

export default IsAnswered;
