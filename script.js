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
        manga.style.display = "block";
      });

      return;
    }

    let encontrou = false;

    mangas.forEach(function (manga) {
      const nome = manga.textContent.toLowerCase();

      if (nome.includes(texto)) {
        manga.style.display = "block";
        encontrou = true;
      } else {
        manga.style.display = "none";
      }
    });

    msg.style.display = encontrou ? "none" : "block";
  });
}

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