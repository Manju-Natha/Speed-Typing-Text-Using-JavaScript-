let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let spinner = document.getElementById("spinner");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let counter = 0;
spinner.classList.toggle("d-none");

function startCounter() {
  counter += 1;
  timer.textContent = counter;
  console.log(counter);
}

let countervalue = setInterval(startCounter, 1000);

function getQuiat() {
  let options = {
    method: "GET",
  };
  fetch("https://apis.ccbp.in/random-quote", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      spinner.classList.add("d-none");

      let quote = jsondata.content;
      quoteDisplay.textContent = quote;
      console.log(jsondata.content);
    });
}
startCounter();
getQuiat();

resetBtn.onclick = function () {
  spinner.classList.remove("d-none");
  getQuiat();
  startCounter();
  counter = 0;
  result.textContent = "";
  quoteInput.value = "";
};

submitBtn.onclick = function () {
  if (quoteInput.value === quoteDisplay.textContent);
  clearInterval(countervalue);
  result.textContent = "You Typed in " + counter + " Seconds";
};
