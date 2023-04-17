import React, { useState, useEffect } from "react";
const ResultGame = ({ gameLog }) => {
  const [result, setResult] = useState({
    correct: 0,
    wrong: 0,
    passed: 0,
  });

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    let correct = 0;
    let wrong = 0;
    let passed = 0;
    gameLog.forEach((log) => {
      if (log.result === "correct") {
        correct++;
      } else if (log.result === "wrong") {
        wrong++;
      } else {
        passed++;
      }
    });
    setResult({
      correct: correct,
      wrong: wrong,
      passed: passed,
    });
  }, [gameLog]);

  return (
    <div className="result text-center">
      <div className="result__item">
        <p className="result__item__title">Düzgün cavablar</p>
        <p className="result__item__value">{result.correct}</p>
      </div>
      <div className="result__item">
        <p className="result__item__title">Səhv cavablar</p>
        <p className="result__item__value">{result.wrong}</p>
      </div>
      <div className="result__item">
        <p className="result__item__title">Pas</p>
        <p className="result__item__value">{result.passed}</p>
      </div>
      <button
        onClick={reset}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Yenidən yoxla
      </button>
    </div>
  );
};

export default ResultGame;
