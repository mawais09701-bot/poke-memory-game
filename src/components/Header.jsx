import ScoreBoard from "./ScoreBoad";

function Header({ heading, description, score, bestScore }) {
  return (
    <header className="header">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
      <ScoreBoard score={score} bestScore={bestScore} />
    </header>
  );
}

export default Header;
