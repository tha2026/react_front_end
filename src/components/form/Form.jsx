import React, { useRef } from "react";

import "./Form.css";
import Card from "../user-interface/Card.jsx";

const Form = (props) => {
    const emailRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value);
        emailRef.current.value = "";
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <label>email:</label>
                <input type="text" ref={emailRef} />
                <button type="submit">Submit</button>
            </form>
        </Card>
    );
};

export default Form;
