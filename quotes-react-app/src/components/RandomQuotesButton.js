import React from "react";

const RandomQuotesButton = (props) => {
    return (
        <div>
            <button className='btn btn-primary' onClick={props.handler}>Change Quote</button>
        </div>
    );
}

export default RandomQuotesButton;