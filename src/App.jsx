import { useState } from "react";
import Header from "./components/Header";
import questions from "./helpers/questions";
import Game from "./components/Game";

function App() {
  let qs = questions;

  const [gameStatus, setGameStatus] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [level, setLevel] = useState(0);
  const [gameLog, setGameLog] = useState([]);
  return (
    <>
      <div className="content max-w-[900px] mx-auto">
        <Header />

        <div className="main py-2 bg-slate-400 mt-2 text-2xl">
          {!gameStatus ? (
            <>
              <p className=" text-center font-bold">
                Oyuna başlamaq istəyirsən?
              </p>
              <div className="flex justify-center pt-2">
                <button
                  onClick={(e) => setGameStatus(true)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  Başla
                </button>
              </div>
            </>
          ) : (
            <Game
              level={level}
              setLevel={setLevel}
              questions={questions}
              gameLog={gameLog}
              setGameLog={setGameLog}
              gameEnd={gameEnd}
              setGameEnd={setGameEnd}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
