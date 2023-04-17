import ResultGame from "./ResultGame";
import React, { useState } from "react";

const Game = ({
  level,
  questions,
  setLevel,
  gameLog,
  setGameLog,
  gameEnd,
  setGameEnd,
}) => {
  const [answer, setAnswer] = useState("");
  let passActive = answer === "" ? true : false;

  const levelup = () => {
    // check question is exist
    if (questions[level + 1]) {
      setLevel(level + 1);
    } else {
      // end of game
      setGameEnd(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let log;
    if (answer === "") {
      log = {
        questionNumber: level,
        answer: "",
        result: "passed",
      };
      setGameLog((prev) => [...prev, log]);
      levelup();
      return;
    }

    if (answer.toLowerCase() === questions[level].word.toLowerCase()) {
      log = {
        questionNumber: level,
        answer: answer,
        result: "correct",
      };
      setGameLog((prev) => [...prev, log]);
      setAnswer("");
      levelup();
      return;
    } else {
      log = {
        questionNumber: level,
        answer: answer,
        result: "wrong",
      };
      setGameLog((prev) => [...prev, log]);
      setAnswer("");
      levelup();
      return;
    }
  };

  return (
    <div className="game">
      {/* if gameEnd show result */}
      {gameEnd ? (
        <div className="result">
          <ResultGame gameLog={gameLog} />
        </div>
      ) : (
        <>
          <div className="circle w-[100px] h-[100px] rounded-full border border-blue-500 text-white text-2xl text-center leading-[100px] mx-auto">
            {questions[level].letter}
          </div>
          <p className="question text-center text-2xl font-bold italic py-2">
            {questions[level].question}
          </p>
          <div className="input flex justify-center py-2">
            <form>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-[300px] h-[35px] border border-blue-500 rounded-l-md focus:outline-none focus:border-none pl-2"
              />
              <button
                onClick={handleSubmit}
                className={`w-auto h-[35px] text-white font-bold rounded-r-md text-md px-3  ${
                  passActive ? "bg-orange-600" : "bg-blue-600"
                }`}
              >
                {passActive ? "Pas" : "Göndər"}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
