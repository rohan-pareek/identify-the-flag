import { useEffect, useState } from "react";
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

  useEffect(() => {
    setShowResult(false);
  }, [activeCountry]);

  return (
    <div className="app-container">
      <Header />
      <Shuffle setActiveCountry={setActiveCountry} countries={countries} />
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
