'use client'

import React, { useState } from 'react';
import Board from '../components/Board';
import Scoreboard from '../components/Scoreboard';

const GamePage = () => {
  const [name, setName] = useState('');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [errores, setErrores] = useState(0);
  const totalCartas = 20; // As there are 20 animals

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  const handleGameComplete = () => {
    setIsGameComplete(true);
  };

  const handleScoreUpdate = (matches, errors) => {
    setAciertos(matches);
    setErrores(errors);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full my-16">
      {!isGameStarted && (
        <div className='my-60'>
          <input
            type="text"
            className="border p-2 mb-4"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-[#304b5f] hover:bg-[#151f38] text-white font-bold py-2 px-4 rounded"
            onClick={handleStartGame}
          >
            Comenzar
          </button>
        </div>
      )}
      {isGameStarted && !isGameComplete && (
        <div className='main-container flex flex-col justify-center'>
          <div className='flex justify-center'>
            <h1 className="text-4xl font-bold mb-4">¡Hola, {name}!</h1>
          </div>
          <Scoreboard aciertos={aciertos} errores={errores} />
          <Board onGameComplete={handleGameComplete} onScoreUpdate={handleScoreUpdate} />
        </div>
      )}
      {isGameComplete && (
        <div>
          <h1 className="text-4xl font-bold mb-4">¡Felicidades, {name}!</h1>
          <h2 className="text-2xl font-bold">Has completado el juego.</h2>
        </div>
      )}
    </div>
  );
};

export default GamePage;
