import AnswerList from "./AnswerList";

export const FlagBelongTo = ({ countryDatas, answerNum }) => {
  countryDatas.map((data, index) => {
    data.isCorrect = answerNum === index ? true : false;
    return data;
  });

  return (
    <div>
      <img className="img" src={countryDatas[answerNum].flag} alt="flag" />
      <h1 className="quest-sentense">
        Which country does this flag belong to?
      </h1>

      <ol>
        <AnswerList countryDatas={countryDatas} answer={answerNum} />
      </ol>
    </div>
  );
};

export const CityIsCapitalOf = ({ countryDatas, answerNum }) => {
  countryDatas.map((data, index) => {
    data.isCorrect = answerNum === index ? true : false;
    return data;
  });

  return (
    <div>
      <h1 className="quest-sentense">
        {countryDatas[answerNum].capital} is the capital of
      </h1>

      <ol>
        <AnswerList countryDatas={countryDatas} answer={answerNum} />
      </ol>
    </div>
  );
};
