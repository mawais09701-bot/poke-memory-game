function Card({ name, imageUrl, onCardClick }) {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
