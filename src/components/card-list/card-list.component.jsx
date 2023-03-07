import Card from "./card/card.component";
import './card-list.component.css';
// import { forwardRef } from "react";

const CardList = (props, forwardRef) => {
    let { monsters } = props;

    return(
        <div className="card-list">
            {monsters.map((monster) => {
                return(
                    <Card monster={monster}/>
                )})}
        </div>
    )
};

export default CardList;