function ScoreBoard({ score, bestScore }) {
  return (
    <div className="score-board">
      <p className="score">Score: {score}</p>
      <p className="best-score">BestScore: {bestScore}</p>
    </div>
  );
}

export default ScoreBoard;
