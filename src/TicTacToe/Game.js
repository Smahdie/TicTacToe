import React, {useState, useEffect} from 'react'
import Board from "./Board";
import PlayersInfo from './PlayersInfo'
import './TicTacToe.css'

function Game() {
    const [playersInfo, setPlayersInfo] = useState([
        {mark: 'x', name: 'Fred', score: 0},
        {mark: 'o', name: 'Joe', score: 0}
    ]);
    const [lastWinner, setLastWinner] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState('x');

    let items = [];
    for (let i = 1; i <= 9; i++) {
        items.push({id: i, currentValue: ''});
    }
    const [squares, setSquares] = useState(items);


    function handlePlayerNameChange(mark, name) {
        let newPlayersInfo = JSON.parse(JSON.stringify(playersInfo));
        newPlayersInfo.forEach(
            p => {
                if (p.mark === mark)
                    p.name = name
            }
        );
        setPlayersInfo(newPlayersInfo);
    }

    function handleResetScore() {
        let newPlayersInfo = JSON.parse(JSON.stringify(playersInfo));
        newPlayersInfo.forEach(
            p => {
                p.score = 0
            }
        );
        setPlayersInfo(newPlayersInfo);
        setCurrentPlayer('x');
        setLastWinner('');
        newGame();
    }


    function newGame() {
        let newSquares = JSON.parse(JSON.stringify(squares));
        newSquares.forEach(
            p => {
                p.currentValue = ''
            }
        );
        setSquares(newSquares);
        setIsFinished(false);
    }

    function handleClickOnSquare(id) {
        let newSquares = JSON.parse(JSON.stringify(squares));
        newSquares[id - 1].currentValue = currentPlayer;
        setSquares(newSquares);
        if (currentPlayer === 'x') {
            setCurrentPlayer('o');
            return;
        }
        setCurrentPlayer('x');
    }

    useEffect(() => {
        function handleGameFinish(winner) {
            if (winner === '') {
                console.log('game is tie');
                return;
            }
            setLastWinner(winner);
            let newPlayersInfo = JSON.parse(JSON.stringify(playersInfo));
            newPlayersInfo.forEach(
                p => {
                    if (p.mark === winner) {
                        p.score++;
                    }
                }
            );
            setPlayersInfo(newPlayersInfo);
        }

        function getGameResult(squares) {
            if (squares[0].currentValue !== '' &&
                squares[0].currentValue === squares[1].currentValue &&
                squares[1].currentValue === squares[2].currentValue)
                return [true, squares[0].currentValue];
            if (squares[3].currentValue !== '' &&
                squares[3].currentValue === squares[4].currentValue &&
                squares[4].currentValue === squares[5].currentValue)
                return [true, squares[3].currentValue];
            if (squares[6].currentValue !== '' &&
                squares[6].currentValue === squares[7].currentValue &&
                squares[7].currentValue === squares[8].currentValue)
                return [true, squares[6].currentValue];

            if (squares[0].currentValue !== '' &&
                squares[0].currentValue === squares[3].currentValue &&
                squares[3].currentValue === squares[6].currentValue)
                return [true, squares[0].currentValue];
            if (squares[1].currentValue !== '' &&
                squares[1].currentValue === squares[4].currentValue &&
                squares[4].currentValue === squares[7].currentValue)
                return [true, squares[1].currentValue];
            if (squares[2].currentValue !== '' &&
                squares[2].currentValue === squares[5].currentValue &&
                squares[5].currentValue === squares[8].currentValue)
                return [true, squares[2].currentValue];

            if (squares[0].currentValue !== '' &&
                squares[0].currentValue === squares[4].currentValue &&
                squares[4].currentValue === squares[8].currentValue)
                return [true, squares[0].currentValue];
            if (squares[2].currentValue !== '' &&
                squares[2].currentValue === squares[4].currentValue &&
                squares[4].currentValue === squares[6].currentValue)
                return [true, squares[2].currentValue];

            if (squares.some(square => square.currentValue === ''))
                return [false, null];
            return [true, null];
        }

        let [isFinished, winner] = getGameResult(squares);
        if (isFinished) {
            setIsFinished(true);
            handleGameFinish(winner);
        }

    }, [squares]);

    return (
        <div className={"game" + (isFinished ? ' finished' : '')}>
            <PlayersInfo
                playersInfo={playersInfo}
                lastWinner={lastWinner}
                currentPlayer={currentPlayer}
                onPlayerNameChanged={handlePlayerNameChange}
                onResetScore={handleResetScore}
                onNewGame={newGame}
            />
            <Board
                currentPlayer={currentPlayer}
                items={squares}
                isFinished={isFinished}
                onClickOnSquare={handleClickOnSquare}
            />
        </div>
    )
}

export default Game