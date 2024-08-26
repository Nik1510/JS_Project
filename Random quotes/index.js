// index.js

// Array of quotes
const Quotes = [
    "Be yourself; everyone else is already taken.",
    "I have not failed. I've just found 10,000 ways that won't work",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    "If you tell the truth, you don't have to remember anything.",
    "If you want to live a happy life, tie it to a goal, not to people"
];

// Get the "quotes" element
const quoteElement = document.getElementById("quotes");

// Function to generate a random quote
function generateQuote() {
    const randomIdx = Math.floor(Math.random() * Quotes.length);
    const quote = Quotes[randomIdx];
    quoteElement.innerHTML = quote;
}

// Call generateQuote() once when the page loads

