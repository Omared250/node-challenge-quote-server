import React from "react";

const RandomQuotesButton = (props) => {
    return (
        <div>
            <button className='btn btn-dark' onClick={props.handler}>Quote!</button>
        </div>
    );
}

export default RandomQuotesButton;