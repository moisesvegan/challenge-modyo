import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getAnimalImages } from '../utils/api';

const Board = ({ onScoreUpdate }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [errors, setErrors] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getAnimalImages()
      .then((data) => {
        // Double the images to create pairs
        const allCards = data.flatMap((animal) => [
          { id: animal.id, image: animal.fields.image.url, isFlipped: false, isMatched: false },
          { id: animal.id, image: animal.fields.image.url, isFlipped: false, isMatched: false },
        ]);
        const shuffledCards = shuffleArray(allCards);
        setCards(shuffledCards);
      })
      .catch((error) => {
        console.error('Error fetching animal images:', error);
      });
  }, []);

  useEffect(() => {
    onScoreUpdate(matches, errors);
    if (matches > 0 && matches === cards.length / 2) {
      setGameStatus('completed');
      setMessage(`¡Felicidades! Has completado el juego con ${matches} aciertos.`);
    } else if (errors > 0 && errors === cards.length / 2) {
      setGameStatus('completed');
      setMessage(`Vuelve a intentarlo. Has cometido ${errors} errores.`);
    }
  }, [matches, errors, cards]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      checkForMatch();
    }
  }, [selectedCards]);

  const handleCardClick = (cardId) => {
    if (gameStatus === 'playing' && selectedCards.length < 2 && !cards[cardId].isFlipped && !cards[cardId].isMatched) {
      setSelectedCards([...selectedCards, cardId]);
      const updatedCards = cards.map((card, index) =>
        index === cardId ? { ...card, isFlipped: true } : card
      );
      setCards(updatedCards);
    }
  };

  const checkForMatch = () => {
    const [firstCardId, secondCardId] = selectedCards;
  
    if (cards[firstCardId].image === cards[secondCardId].image) {
      // Match found
      const updatedCards = cards.map((card, index) =>
        index === firstCardId || index === secondCardId
          ? { ...card, isMatched: true } // Keep the cards visible as they are matched
          : card
      );
      setCards(updatedCards);
      setMatches((prevMatches) => prevMatches + 1);
    } else {
      // No match, flip back the cards immediately without delay
      const updatedCards = cards.map((card, index) =>
        index === firstCardId || index === secondCardId
          ? { ...card, isFlipped: false }
          : card
      );
      setCards(updatedCards);
      setErrors((prevErrors) => prevErrors + 1);
    }
    setSelectedCards([]);
  };

  // Function to shuffle the array
  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleRestartGame = () => {
    setGameStatus('playing');
    setMatches(0);
    setErrors(0);
    setMessage('');
    const updatedCards = cards.map((card) => ({
      ...card,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(shuffleArray(updatedCards));
  };

  return (
    <div className="flex flex-wrap justify-center mt-8 px-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
      {gameStatus === 'completed' && (
        <div className="flex flex-col items-center mt-4">
          <p>{message}</p>
          <button
            className="bg-[#304b5f] hover:bg-[#151f38] border-[#151f38] text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleRestartGame}
          >
            Reiniciar Juego
          </button>
        </div>
      )}
    </div>
  );
};

export default Board;
