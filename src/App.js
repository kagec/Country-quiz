import styled from "styled-components";
import CountryQuiz from "./components/CountryQuiz";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <CountryQuiz />
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 0;
  width: 464px;
`;

export default App;
