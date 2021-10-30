import {useState} from "react";
import Game from "../Game";

const Setup = () => {
    const [gameSize, setGameSize] = useState(5);
    const [startGame, setStartGame] = useState(false);
    const handleGenerateGame = () => {
        if(gameSize >= 5) {
            setGameSize(gameSize);
            setStartGame(true);
        }
        else
            return alert("Minimum size is 5");
    }
    const randomSize = () => {
        const max = 15, min = 5;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const handleRandomGame = () => {
        setGameSize(randomSize());
        setStartGame(true);
    }

    return (
        <div className="config">
            <div id="author">
                <h1>React tictactoe assignment 02</h1>
                <p>by Phan Tan Dat - 18127078</p>
            </div>

            {!startGame ?
                (<div id="size_config">
                    <div>
                        <label htmlFor="size_input">Enter size of game board </label>
                        <input
                            id="size_input"
                            type={"number"}
                            value={gameSize}
                            min={5}
                            placeholder="Enter game size"
                            onChange={
                                (event) => setGameSize(parseInt(event.target.value))
                            }
                        />
                    </div>
                    <button
                        className="button"
                        onClick={handleGenerateGame}>
                        Generate Board
                    </button>
                    <button
                        className="button"
                        onClick={handleRandomGame}>
                        Random Board Size
                    </button>
                </div>)
                : (<div id = "new_game">
                    <button
                        onClick={()=>setStartGame(false)}>
                        Return
                    </button>
                    <Game gameboard_size={gameSize} />
                </div>)
            }
        </div>
    );

};

export default Setup;
