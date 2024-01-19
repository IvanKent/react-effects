const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';
import { useEffect, useState } from "react";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({});
    useEffect(() => {
        fetchAndSetQuote();
    }, [])
    async function fetchAndSetQuote(){
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }
    return (
        <div>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
            <button onClick={fetchAndSetQuote}>Get Quote Using handler</button>
        </div>
    )
}