function Loading() {
  return (
    <div className="loading">
      {" "}
      <div className="loading-icon">🧠</div>{" "}
      <h2>Preparing your challenge...</h2>{" "}
      <p>
        {" "}
        Memory Tip: Try remembering the <strong>position</strong> of cards, not
        just their appearance.{" "}
      </p>{" "}
      <div className="loading-dots">
        {" "}
        <span></span> <span></span> <span></span>{" "}
      </div>{" "}
    </div>
  );
}
export default Loading;
