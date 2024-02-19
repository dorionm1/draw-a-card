import "../App.css";
import { allGoneImg } from "../App";

const DrawCardBtn = ({card, getCard}) => {
    return (
        <button disabled={card === allGoneImg} onClick={getCard} id="draw-card">{!card ? 'Shuffle Deck & Get Card!' : 'Get Card'}</button>
    )
}

export default DrawCardBtn;