import React from 'react'
import Square from './Square'

function Board(props) {
    return (
        <div className={"game-board"}>
            {
                props.items.map(square =>
                    <Square 
                        key={square.id} 
                        id={square.id}
                        currentValue={square.currentValue} 
                        currentPlayer={props.currentPlayer} 
                        clickEvent={props.onClickOnSquare} 
                        isLocked={props.isFinished} />
                )}
        </div>
    )
}

export default Board