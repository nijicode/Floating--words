const words = [
  "Hey",
  "Men",
  "Hi",
  "Hello",
  "Miss you",
  "Kamusta?",
  "Annyeong",
  "こんにちは",
  "你好",
  "Xin chào",
];
const container = document.querySelector(".container");

function paulan() {
  let drop = generateWordDrop();
  container.appendChild(drop);
}
function pindutin() {
  setInterval(paulan, 100);
  removeDrop();
}

function removeDrop() {
  setInterval(() => container.removeChild(container.firstChild), 400);
}

function generateRandom(mult, round) {
  let result = Math.random() * mult;
  if (round) {
    result = Math.floor(result);
  }
  return result;
}

function generateWordDrop() {
  let drop = document.createElement("span");
  drop.classList.add("text");
  drop.innerText = words[generateRandom(words.length, true)];
  drop.style.left = `${20 + generateRandom(2500, true)}px`;
  drop.style.fontSize = `${0.75 + generateRandom(1.5)}em`;
  drop.style.animationDuration = `${1 + generateRandom(1)}s`;

  return drop;
}
