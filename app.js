const btn = document.querySelector("#btn");
let textMotiv = document.querySelector("#text");
let authorMotiv = document.querySelector("#author");

const motivation = [
  {
    text: "Чем усерднее вы работаете, тем более удачливым вы становитесь.",
    author: "Томас Джефферсон",
  },
  {
    text: "Интеллект — это способность быстро приспосабливаться к изменениям.",
    author: "Стивен Хокинг",
  },
  {
    text: "Если вы работаете над чем-то, что вас заводит, вам не нужен удар. Миссия ведет вас.",
    author: "Стив Джобс",
  },
  {
    text: "Не меняя направления, ты остаешься на том же месте.",
    author: "Лао-цзы",
  },
  {
    text: "Совершенство недостижимо, но если вы стремитесь к нему, вы можете достичь совершенства.",
    author: "Винс Ломбарди",
  },
  {
    text: "Пренебрегая подготовкой, вы готовитесь к поражению.",
    author: "Бенджамин Франклин",
  },
];

function getMotivation(array) {
  btn.addEventListener("click", () => {
    function generateList() {
      let randomInd = array[Math.floor(Math.random() * 6)];
      textMotiv.innerHTML = randomInd.text;
      authorMotiv.innerHTML = randomInd.author;
    }
    generateList();
  });
}
getMotivation(motivation);
