const AnswerList = ({ countryDatas }) => {
  return (
    <>
      {!countryDatas
        ? null
        : countryDatas.map((data, index) => (
            <li key={index}>
              <button className="btn-answer">
                {!countryDatas ? "" : data.name}
              </button>
            </li>
          ))}
    </>
  );
};

export default AnswerList;
