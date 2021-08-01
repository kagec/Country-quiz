import axios from "axios";
import { useEffect, useState } from "react";

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const CountryQuiz = () => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const { data } = await axios.get(
          "https://restcountries.eu/rest/v2/all?fields=name;capital;flag;"
        );

        setCountryData(data);
      } catch (e) {
        alert(e);
      }
    };

    fetchCountryData();
  }, []);

  const chooseCountry = () => {
    if (!countryData) {
      return null;
    }

    let chooseData = new Set();
    const countryDataLength = countryData.length;

    while (chooseData.size < 4) {
      chooseData.add(countryData[getRandomInt(countryDataLength)]);
    }

    return [...chooseData];
  };

  const choseCountry = chooseCountry();
  console.log(countryData);

  return (
    <div className="quiz-field">
      <h1 className="quest-sentense">
        {!countryData ? "" : choseCountry[getRandomInt(4)].capital} is the
        capital of
      </h1>
      <button className="btn-answer">
        {!countryData ? "" : choseCountry[0].name}
      </button>
      <button className="btn-answer">
        {!countryData ? "" : choseCountry[1].name}
      </button>
      <button className="btn-answer">
        {!countryData ? "" : choseCountry[2].name}
      </button>
      <button className="btn-answer">
        {!countryData ? "" : choseCountry[3].name}
      </button>
    </div>
  );
};

export default CountryQuiz;
