import React from "react";

function Shuffle({ setActiveCountry, countries }) {
  const selectActiveCountry = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    setActiveCountry(list[randomIndex]);
  };

  return (
    <div className="shuffle">
      <button
        onClick={() => selectActiveCountry(countries)}
        disabled={countries?.length === 0}
      >
        Shuffle
      </button>
    </div>
  );
}

export default Shuffle;
