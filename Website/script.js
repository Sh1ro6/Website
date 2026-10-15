// Falling notes on the left and right sides of the home page
(function () {
  const container = document.getElementById("notes");
  if (!container) return;

  const symbols = ["♪", "♫", "♩", "♬"];
  const COUNT = 28;

  for (let i = 0; i < COUNT; i++) {
    const note = document.createElement("span");
    note.className = "note";
    note.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Left half of notes use 0-14% of width, right half use 86-100%
    const left = i % 2 === 0 ? Math.random() * 14 : 86 + Math.random() * 12;
    note.style.left = left + "%";
    note.style.fontSize = 48 + Math.random() * 40 + "px"; // larger notes
    note.style.animationDuration = 7 + Math.random() * 8 + "s";
    note.style.animationDelay = -Math.random() * 15 + "s";

    container.appendChild(note);
  }
})();
