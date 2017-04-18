// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", getRandomColor, false);
var quotes = [
// Storing all quotes in a value decalred "quotes" with it's assiocated properties

  {
    quote: "Poets have been mysteriously silent on the subject of cheese.",
    source: "G.K. Chesteron",
    citation: "Alarms and Discussions",
    year: 1911,
    tag: "food/humor"
  },

  {
    quote: "The early bird gets the worm, but the second mouse gets the cheese.",
    source: "Willie Nelson",
    citation: "Unknown",
    year: 2008,
    tag: "food/humor"
  },

  {
    quote: "Life is great. Cheese makes it better",
    source: "Avery Aames",
    citation: " The Long Quiche Goodbye",
    year: 2010,
    tag: "food/humor"

  },

  {
    quote: "Age is something that doesn\'t matter, unless you are a cheese.",
    source: "Luis Bunuel",
    citation: "Unknown",
    year: 2016,
    tag: "food/humor"
  },

  {
    quote: "I\'ve got a fever and the only prescription is more cowbell",
    source: "THE Bruce Dickinson",
    citation: "Dynamite sound",
    year: 1976,
    tag: "humor"
  }

];

// Using the quotes array object literal(s), assign each quote to a numerical value
function getRandomQuote () {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};

// Calling the getRandomNumber function to display the array's properties using the numerical value assigned by the randomNumber function.
function printQuote() {
  var randomQuote = getRandomQuote();
  var outDisplayQuote = '<p class="quote">' + randomQuote.quote + '</p>';
  outDisplayQuote += '<p class="source">' + randomQuote.source;
  outDisplayQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  outDisplayQuote += '<span class="year">' + randomQuote.year + '</span>';
  outDisplayQuote += '</p>';
  document.getElementById('quote-box').innerHTML = outDisplayQuote;
};
// Setting a function to change the background color on click
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    return color;
}
// Call the print quote function
// Set the intervanl "refresh" time the printQuote fucntion to 30 seconds
setInterval(printQuote, 30000);
setInterval(getRandomColor, 30000);
