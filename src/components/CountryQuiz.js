import axios from "axios";
import { useEffect, useState } from "react";
import { CityIsCapitalOf, FlagBelongTo } from "./Quiz";

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const CountryQuiz = () => {
  const [countryData, setCountryData] = useState(null);
  const [clearCount, setClearCount] = useState(0);
  const [isWrong, setIsWrong] = useState(false);

  console.log(clearCount);
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

    return [...chooseData].map((data) => {
      data.isPressed = false;
      return data;
    });
  };

  const choseCountry = chooseCountry();
  const answerNum = getRandomInt(4);

  return (
    <div className="quiz-field">
      {countryData === null ? (
        <div className="load">Loading...</div>
      ) : !getRandomInt(2) ? (
        <CityIsCapitalOf
          countryDatas={choseCountry}
          answerNum={answerNum}
          clearCount={clearCount}
          setClearCount={setClearCount}
          setIsWrong={setIsWrong}
        />
      ) : (
        <FlagBelongTo
          countryDatas={choseCountry}
          answerNum={answerNum}
          clearCount={clearCount}
          setClearCount={setClearCount}
          setIsWrong={setIsWrong}
        />
      )}
    </div>
  );
};

export default CountryQuiz;
