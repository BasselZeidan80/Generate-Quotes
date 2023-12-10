// Generate quotes

var usedQuotes = [];

function getQuotes() {
  var quote = [
    "“Be yourself everyone else is already taken.”  ❤️",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me 👏🏻",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” 🥰",
    "“So many books, so little time.” 🥰 ",
    "A room without books is like a body without a soul  ❤️",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. 🎼",
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening 🎻",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams 🏆",
    "You only live once, but if you do it right, once is enough 🏆",
  ];

  var Names = [
    "Oscar Wilde",
    "Marilyn Monroe",
    "Albert Einstein",
    "Frank Zappa",
    "Marcus  Cicero",
    "Bernard Baruch",
    "William Purkey",
    "Dr. Seuss",
    "Mae West",
  ];

  var images = [
    "images/Oscar Wilde.jpg",
    "images/Marilyn Monroe.jpg",
    "images/Albert Einstein.jpg",
    "images/Frank Zappa.jpg",
    "images/Marcus  Cicero.jpg",
    "images/Bernard Baruch.jpg",
    "images/William Purkey.jpg",
    "images/Dr. Seuss.jpg",
    "images/Mae West.jpg",
  ];

  if (usedQuotes.length == quote.length) {
    document.getElementById("quote").innerHTML = "No more quotes available.";
    document.getElementById("name").innerHTML = "";
    document.getElementById("images").innerHTML = "";
    return;
  }

  var x;
  do {
    var x = Math.floor(Math.random() * Names.length);
  } while (usedQuotes.includes(x));
  usedQuotes.push(x);

  document.getElementById("quote").innerHTML = quote[x];
  document.getElementById("name").innerHTML = Names[x];
  document.getElementById("images").innerHTML = `  <img src="${images[x]}" >`;
}
