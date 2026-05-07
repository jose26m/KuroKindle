const campoBusca = document.getElementById("busca");
const mangas = document.querySelectorAll("#lista-mangas li");
const msg = document.getElementById("mensagem");

if (campoBusca && mangas.length > 0 && msg) {
  msg.style.display = "none";

  campoBusca.addEventListener("keyup", function () {
    const texto = campoBusca.value.toLowerCase();

    if (texto === "") {
      msg.style.display = "none";
      mangas.forEach(function (manga) {
        manga.style.display = "flex"; // MUDADO PARA FLEX
        manga.style.opacity = "1";
      });
      return;
    }

    let encontrou = false;

    mangas.forEach(function (manga) {
      const nome = manga.textContent.toLowerCase();

      if (nome.includes(texto)) {
        manga.style.display = "flex"; // MUDADO PARA FLEX
        manga.style.opacity = "1";
        manga.style.height = "auto"; // GARANTE ALTURA
        encontrou = true;
      } else {
        manga.style.opacity = "0"; // USA OPACITY EM VEZ DE NONE
        manga.style.height = "0"; // ESCONDE SEM QUEBRAR HOVER
        manga.style.padding = "0";
        manga.style.margin = "0";
        manga.style.overflow = "hidden";
        setTimeout(() => {
          if (manga.style.opacity === "0") {
            manga.style.display = "none";
          }
        }, 200);
      }
    });

    msg.style.display = encontrou ? "none" : "block";
  });
}

// Theme toggle (mantém igual)
const btn = document.getElementById('theme-toggle');

if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark-mode');
  btn.textContent = '☀️';
} else {
  btn.textContent = '🌙';
}

btn.addEventListener('click', () => {
  document.body.classList.add('fade-transition');
  setTimeout(() => {
    document.body.classList.remove('fade-transition');
  }, 300);

  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('tema', 'dark');
    btn.textContent = '☀️';
  } else {
    localStorage.setItem('tema', 'light');
    btn.textContent = '🌙';
  }
});