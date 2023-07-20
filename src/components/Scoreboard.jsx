import React from "react";

const Scoreboard = ({ aciertos, errores }) => {
  return (
    <div className="flex flex-row justify-center">
      <div class="flex px-4">
        <p>Aciertos: {aciertos}</p>
      </div>
      <div class="flex px-4">
        <p>Errores: {errores}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
