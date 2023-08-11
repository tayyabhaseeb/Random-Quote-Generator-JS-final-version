document.getElementById("new-quote").addEventListener("click", newQuote);

function newQuote() {
  const randomColor = getRandomColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".parent-container").style.color = randomColor;
  document.querySelector(".quote-btn").style.backgroundColor = randomColor;
  render();
}

render();

function render() {
  fetch(
    `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
  )
    .then((response) => response.json())
    .then((data) => {
      const quotesArr = data.quotes;
      const randomNum = Math.floor(Math.random() * quotesArr.length);
      const randomQuote = quotesArr[randomNum];

      document.getElementById("container").innerHTML = `
      
            <div id="quote-container">
            <h3 class="quote-text">“ ${randomQuote.quote}</h3>
            <h4 class="quote-author">${randomQuote.author}</h4>
          </div>
          <div class="btn-container">
          <div class = "twitter-cont">
          <a
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randomQuote.quote}"
            ><i class="fa-brands fa-square-x-twitter"></i></a>
          </div>
        

          <div class = "twitter-cont facebook-cont" >
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randomQuote.quote}"
            ><i class="fa-brands fa-facebook"></i></a>
          </div>

       
        </div>
      `;
    });
}

function getRandomColor() {
  // Generate random color components (R, G, B)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert the components to a hex code
  const hexColor = `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

  return hexColor;
}
