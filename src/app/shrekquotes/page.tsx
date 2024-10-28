'use client'
import Footer from "../footer/page";
import Header from "../header/page";
import Layout from "./layout";

import { useState } from 'react';

const Quotes = () => {
    const shrekQuotes = [
        "Ogres are like onions... they have layers!",
        "What are you doing in my swamp?",
        "I'm like a crackin' onion!",
        "Better out than in, I always say!",
        "Donkey, I'm warning you!",
        "This is the part where you run away."
    ];

    const [quoteIndex, setQuoteIndex] = useState(0);

    const handleClick = () => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % shrekQuotes.length);
        console.log("Button clicked!");
    }

    return (
        <Layout>
        <>
            <Header />
            <div className="flex flex-col items-center text-center mt-28">
                <h1 className="text-4xl font-semibold italic mb-8">Shrek&apos;s Iconic Quotes</h1>
                <div className="bg-green-600 p-16 rounded-lg  ">
                    <p className="text-2xl font-serif italic">{shrekQuotes[quoteIndex]}</p>
                </div>
                <button 
                    onClick={handleClick} 
                    type="button" 
                    className="bg-yellow-500 rounded-full p-2 px-6 text-green-800 font-semibold text-lg mt-10 shadow-lg transition ease-in-out hover:bg-yellow-400 hover:scale-105 "
                >
                    Get a new quote
                </button>
            </div>
            <Footer />
        </>
        </Layout>
    );
}

export default Quotes;
