const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let quotes = [];

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// show new quote
function newQuote() {
  showLoadingSpinner();
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  authorText.textContent = quote.author || "Unknown";

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //   set quote , hide loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const res = await fetch(apiUrl);
    quotes = await res.json();
    newQuote();
  } catch (error) {
    // catch error here
    console.log("Failed to load quotes.", error);
  }
}

// tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  //   opens the url in new tab
  window.open(twitterUrl, "_blank");
}

// event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// on load
getQuotes();
