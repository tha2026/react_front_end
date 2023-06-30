import React from "react";

import "./ButtonCard.css";
import Card from "../user-interface/Card.jsx";

const ButtonCard = (props) => {
    return (
        <div>
            <Card className="rounded-corners">
                <p>Fidget Spinner</p>
                <button onClick={() => {console.log("clicked button")}} className="rounded-corners">Buy Now</button>
            </Card>
        </div>
    );
};

export default ButtonCard;
