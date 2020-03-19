import React, {useState} from "react";

function PlayerEntry(props) {
    const [name,setName] = useState(props.player.name);
    function handleChange(event) {
        setName(event.target.value);
        props.onPlayerNameChanged(props.player.mark, event.target.value);
    }
    let className = 'player player-' + props.player.mark;
    if(props.isLastWinner)
        className+=' winner-player';
    if(props.isCurrentPlayer){
        className+=" current-player";
    }
    
    return (<div className={className}>
        <span className={"mark"}>{props.player.mark}</span>
        <input type={"text"} placeholder={"name"} value={name} onChange={handleChange}/>
        <span className={"score"}>{props.player.score}</span>
    </div>)
}

export default PlayerEntry