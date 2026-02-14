/* CORAZÓN GRANDE DEL ÁRBOL */
const group = document.querySelector(".heart-group");

for (let i = 0; i < 180; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";

  const t = Math.random() * Math.PI * 2;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

  heart.style.left = `${110 + x * 6}px`;
  heart.style.top = `${90 + y * 6}px`;

  const colors = ["#ff4d6d", "#ff758f", "#ff8fa3"];
  heart.style.background = colors[Math.floor(Math.random() * colors.length)];

  group.appendChild(heart);
}

/* CONTADOR */
const startDate = new Date("2024-02-14T00:00:00");

function updateCounter() {
  let diff = Math.floor((new Date() - startDate) / 1000);

  const days = Math.floor(diff / 86400);
  diff %= 86400;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById("counter").textContent =
    `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(updateCounter, 1000);
updateCounter();

/* CORAZONES CAYENDO */
const fallingContainer = document.querySelector(".falling-hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "falling-heart";
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  fallingContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);
