import React from 'react'
import PlayerEntry from "./PlayerEntry";
function PlayersInfo(props) {
    return(
        <div className={"players-info"}>
            <PlayerEntry 
                player={props.playersInfo[0]} 
                onPlayerNameChanged={props.onPlayerNameChanged} 
                isLastWinner={props.lastWinner === props.playersInfo[0].mark}
                isCurrentPlayer={props.currentPlayer ===props.playersInfo[0].mark}
            />
            <PlayerEntry 
                player={props.playersInfo[1]} 
                onPlayerNameChanged={props.onPlayerNameChanged} 
                isLastWinner={props.lastWinner === props.playersInfo[1].mark}
                isCurrentPlayer={props.currentPlayer ===props.playersInfo[1].mark}/>
            <button className={"newGame"} onClick={props.onNewGame}>New Game</button>
                <button className={"resetScore"} onClick={props.onResetScore}>Reset Scores</button>
            
        </div>
    )
}
export default  PlayersInfo