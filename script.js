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

const btnTema = document.getElementById("btn-tema");