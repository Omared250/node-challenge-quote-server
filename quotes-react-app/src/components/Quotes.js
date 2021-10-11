import React, { useState } from "react";
import RandomQuotesButton from "./RandomQuotesButton";

const Quotes = () => {

    const [quotes, setQuotes] = useState('');
    // const [loading, setLoading] = useState(false);
    const handleClick = () => {
        fetch(`http://localhost:5000/quotes/random`)
        .then(res => res.json())
        .then((data) => {
            setQuotes(data)
        })
    };

    const GettingQuotes = () => {
        if (quotes) {
            return (
                <div className='quote-container'>
                    <p>{quotes.quote}</p>
                    <p>{quotes.author}</p>
                </div>
            )
        } else {
            return null;
        }
    };

    return (
        <div>
            <GettingQuotes /> 
            <RandomQuotesButton handler={handleClick}/>
        </div>
    );
}

export default Quotes;