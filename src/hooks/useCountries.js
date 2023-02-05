import { useEffect, useState } from "react";

function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries([
          ...data.map((country) => {
            return {
              name: country.name,
              code: country.alpha2Code,
              flag: country.flags.png,
            };
          }),
        ]);
      })
      .catch(console.log);
  }, []);

  return countries;
}

export default useCountries;
