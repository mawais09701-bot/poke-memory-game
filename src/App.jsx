import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import getPokemon from "./api/pokemon.js";
import CardsContainer from "./components/CardsContainer.jsx";
import Loading from "./components/Loading.jsx";
import shuffle from "./utils/shuffle.js";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function handleCardClick(card) {
    if (clickedCards.includes(card.id)) {
      setScore(0);
      setClickedCards([]);
      setCards(shuffle(cards));

      return;
    }

    const newScore = score + 1;

    setClickedCards([...clickedCards, card.id]);
    setScore(score + 1);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    setCards(shuffle(cards));
  }

  useEffect(() => {
    const controller = new AbortController();

    getPokemon(controller.signal)
      .then((pokemon) => {
        setCards(shuffle(pokemon));
        setLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Header
        heading="Poke Memory"
        description="Select from below cards. But dont select cards selected once."
        score={score}
        bestScore={bestScore}
      />
      <main className="main">
        {loading ? (
          <Loading />
        ) : (
          <CardsContainer onCardClick={handleCardClick} cards={cards} />
        )}
      </main>
    </>
  );
}

export default App;
