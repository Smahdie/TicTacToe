import React from 'react'

function Square(props) {
    // const [currentValue, setCurrentValue] = useState(props.currentValue);
    let className = "square";
    if(props.currentValue !== ''){
        className += " square-" + props.currentValue;
    }
    if(props.isLocked){
        className+= " locked";
    }
     function squareClick() {         
        if(props.isLocked)
            return;
         if(props.currentValue!=='')
             return;
         // setCurrentValue(props.currentPlayer);
         props.clickEvent(props.id);
     }
    return (<span className={className} onClick={squareClick}>{ props.currentValue }</span>);
}
export default  Square