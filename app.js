const btn = document.querySelector("#btn");
let output = document.querySelector("#output");

let wishes = [
  "That sounds good",
  "Yes, you should definitely do that",
  "I'm not sure that's a great idea",
  "Maybe not today?",
  "Computer says no.",
];

function yourWish(array) {
  document.querySelector("#btn").addEventListener("click", () => {
    function getWish() {
      document.querySelector("#output").innerHTML =
        array[Math.floor(Math.random() * 5)];
    }
    getWish();
  });
}
yourWish(wishes);
