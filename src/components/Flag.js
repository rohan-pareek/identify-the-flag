import React from "react";

function Flag({ flag }) {
  if (!flag) return null;
  return (
    <div className="flag">
      <img src={flag} alt="A flag" />
    </div>
  );
}

export default Flag;
