import { useState } from "react";
import "./App.css";
import Flag from "./components/Flag";
import Header from "./components/Header";
import Result from "./components/Result";
import Shuffle from "./components/Shuffle";
import useCountries from "./hooks/useCountries";

function App() {
  const countries = useCountries();
  const [activeCountry, setActiveCountry] = useState({});
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <Shuffle
        setActiveCountry={(country) => {
          setShowResult(false);
          setActiveCountry(country);
        }}
        countries={countries}
      />
      <Flag flag={activeCountry?.flag} />
      {activeCountry?.code && (
        <button className="show-result" onClick={() => setShowResult(true)}>
          Show Result
        </button>
      )}
      {showResult && <Result countryName={activeCountry?.name} />}
    </div>
  );
}

export default App;
