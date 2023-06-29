import React from "react";

import "./ButtonCard.css";
import Card from "../user-interface/Card.jsx";

const ButtonCard = (props) => {
    return (
        <div>
            <Card className="rounded-corners">
                <p>Fidget Spinner</p>
                <button>Buy Now</button>
            </Card>
        </div>
    );
};

export default ButtonCard;
