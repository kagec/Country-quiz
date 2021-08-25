import "./App.css";
import CountryQuiz from "./components/CountryQuiz";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <CountryQuiz />
    </div>
  );
};

export default App;
