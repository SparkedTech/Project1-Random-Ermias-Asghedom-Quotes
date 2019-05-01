//  The array of 10 quote objects 
var quotes = [
{ quote: 'Thought is powerful in all phases...things end up exactly how I visualized them.',
  source:"Nipsey Hussle",
  category: "(Power Of Thought)" },      

{ quote: "The most important thing, number one, is you gotta get rid of doubt.",
  source: "Nipsey Hussle",
  citation: "WestCoastRydaz.com Interview",
  year: "2009",
  category: "(Faith)"},

{ quote: "The company you keep has a large influence on the situations you bring to yourself.",
  source: "Nipsey Hussle",
  citation: "LVTV Interview",
  year: "2017",
  category: "(Relationships)"},


{ quote: "You gotta go hard, you gotta believe in yourself... just stick to the script, believe and have an overwhelming confidence.",
  source: "Nipsey Hussle",
  citation: "LVTV Interview",
  year: "2017",
  category: "(Faith)"},


{ quote: "Its not on you, its in you",
  source: "Nipsey Hussle",
  citation: `During Lauran London's eulogy of Nipsey Hussle`,
  year: `2019`,
  category: "(Inner Strength)"},



{ quote: "Be more fearless...Just have a bigger vision, have a higher expectation.",
  source:"Nipsey Hussle",
  category: "(Faith)" },


{ quote: "The best thing you can do for a person is to inspire them.",
  source: "Nipsey Hussle",
  citation: "4TheCulture Interview",
  year: "2015",
  category: "(Relationships)"},


{ quote: "Everything gonna test you if it's worthwhile.",
  source: "Nipsey Hussle",
  citation: "HardBody Kiotti",
  year: "2018",
  category: "(Inner Strength)"},


{ quote: "Define who you are and what you are, and be clear on that. Meditate on that and then, live and die by that.",
  source: "Nipsey Hussle",
  citation: "Self Made Tastes Better Interview",
  year: "2018",
  category: "(Inner Strength)"},


{ quote: `Sometimes you have to take two steps back to take ten forward.`,
  source: "Nipsey Hussle",
  category: "(Faith)",

}

];


//This is the function that will randomly generate a number to  selcet one of the quote object from the arrary
 function getRandomQuote() {
  let numberOfQuotes = quotes.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuotes);
  return quotes[randomNumber];
}


// this function will print the randomly selected quote to the screen
function printQuote() {
  let randomQuote = getRandomQuote();
  let message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation && randomQuote.year && randomQuote.category) {
    message += '<span class="citation"> ' + randomQuote.citation + '</span>';
    message += '<span class="year"> ' + randomQuote.year + '</span>';
    message += '<span class="category"> ' + randomQuote.category + '</span></p>';
  } else if (randomQuote.category) {
    message += '<span class="category"> ' + randomQuote.category + '</span></p>';
  } 
  document.getElementById('quote-box').innerHTML = message;

}


//The  event listener for new quote button, that calls  the "printQuote" 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//product of the imagination of Joshua Jiles Peace, Love & Blessings









/*  FOR LATER

// this is an arrary of photos
var nipPhotos = [
{ backgroundImage: '1.jpg'},      

{ backgroundImage: '2.jpg'},

{ backgroundImage: '3.jpg'},

{ backgroundImage: '4.jpg'},

{ backgroundImage: '5.jpg'},

{ backgroundImage: '6.jpg'},

{ backgroundImage: '7.jpg'},

{ backgroundImage: '8.jpg'},

{ backgroundImage: '9.jpg'},

{ backgroundImage: '10.jpg'
},

];
//This is the function that will randomly generate a number to  selcet one of the photo object from the arrary 
function getRandomPhoto() {
  let numberOfPhotos = nipPhotos.length;
  let randomNumber = Math.floor(Math.random() * numberOfPhotos);
  return nipPhotos[randomNumber];
}

// this function will print a random background image every time the page is refreshed
function printImage() {
  let randomPhoto = getRandomPhoto();



  */