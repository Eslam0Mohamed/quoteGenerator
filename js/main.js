var button = document.getElementById("btn");
var container = document.getElementById("container");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

var Quotes = ["“Be yourself; everyone else is already taken.”",
              "“So many books, so little time.”",
              "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
              "“A room without books is like a body without a soul.”",
              "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
              "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
              "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
              "“You only live once, but if you do it right, once is enough.”",
              "“Be the change that you wish to see in the world.”",
              "“In three words I can sum up everything I've learned about life: it goes on.”",
            ]
var authors = ["― Oscar Wilde",
    "― Frank Zappa",
    "― Albert Einstein",
    "― Marcus Tullius Cicero",
    "― Bernard M. Baruch",
    "― William W. Purkey",
    "― Dr. Seuss",
    "― Mae West",
    "― Mahatma Gandhi",
    "― Robert Frost"]



function newQuote(){
    var randomIndex = Math.trunc(Math.random() * Quotes.length)
    quote.innerHTML=Quotes[randomIndex];
    author.innerHTML=authors[randomIndex];
}
