import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";

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

  return (
    <div className="quiz-field">
      {countryData === null ? (
        <div className="load">Loading...</div>
      ) : (
        <Quiz countryDatas={countryData} />
      )}
    </div>
  );
};

export default CountryQuiz;
