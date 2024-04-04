export default Card 
import { useContext } from "react";
import { CardContext } from "./CardContext";
import { useParams } from "react-router-dom";


function Card(){
    const {stateParks} = useContext(CardContext)
    const cardId = useParams();
    const foundCard = stateParks.find(card => card.id === cardId.locationsId);

    console.log(cardId);
    console.log(stateParks);
    console.log(foundCard);
    return(
        <div className="parkCard">
            <img src={foundCard.images[0].url} className="cardImage"/>
            <h1>{foundCard.fullName}</h1>
            <p>{foundCard.description}</p>
        </div>
    )
}