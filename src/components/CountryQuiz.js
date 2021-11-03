import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Quiz from "./Quiz";

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const chooseCountry = (countryData) => {
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
    <QuizApp>
      {countryData === null ? (
        <Load>Loading...</Load>
      ) : (
        <Quiz countryDatas={countryData} />
      )}
    </QuizApp>
  );
};

const QuizApp = styled.div`
  position: relative;
  background: #fff;
  border-radius: 24px;
  margin-top: 10px;
`;

const Load = styled.div`
  text-align: center;
  font-size: 24px;
`;

export default CountryQuiz;
