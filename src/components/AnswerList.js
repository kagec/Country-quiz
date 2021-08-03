const AnswerList = ({ countryDatas }) => {
  return (
    <>
      {countryDatas.map((data, index) => (
        <li key={index}>
          <button className="btn-answer">{data.name}</button>
        </li>
      ))}
    </>
  );
};

export default AnswerList;
