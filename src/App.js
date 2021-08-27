import "./App.css";
import CountryQuiz from "./components/CountryQuiz";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <CountryQuiz />
      <Footer />
    </div>
  );
};

export default App;
