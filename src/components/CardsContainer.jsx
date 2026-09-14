import Card from "./Card.jsx";

function CardsContainer({ cards, onCardClick }) {
  return (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            onCardClick={() => onCardClick(card)}
            name={card.name}
            imageUrl={card.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
