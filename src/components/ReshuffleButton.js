import "../App.css";

const ReshuffleButton = ({reshuffle}) => {
    return(
        <button onClick={reshuffle} id="reshuffle">Reshuffle</button>
    )
}

export default ReshuffleButton;