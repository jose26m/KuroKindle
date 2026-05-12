const campoBusca = document.getElementById("busca");
const mangas = document.querySelectorAll("#lista-mangas li");
const msg = document.getElementById("mensagem");
const btn = document.getElementById('theme-toggle');

// ===== BUSCA (MANHÃ SEM MUDANÇA) =====
if (campoBusca && mangas.length > 0 && msg) {
  msg.style.display = "none";

  campoBusca.addEventListener("keyup", function () {
    const texto = campoBusca.value.toLowerCase();

    if (texto === "") {
      msg.style.display = "none";
      mangas.forEach(function (manga) {
        manga.style.display = "flex";
        manga.style.opacity = "1";
      });
      return;
    }

    let encontrou = false;

    mangas.forEach(function (manga) {
      const nome = manga.textContent.toLowerCase();

      if (nome.includes(texto)) {
        manga.style.display = "flex";
        manga.style.opacity = "1";
        manga.style.height = "auto";
        encontrou = true;
      } else {
        manga.style.opacity = "0";
        manga.style.height = "0";
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

// ===== TEMA INSTANTÂNEO (SEU CÓDIGO MELHORADO) =====
const temaSalvo = localStorage.getItem('tema') || 'dark';

// Aplica INSTANTANEAMENTE
document.body.classList.toggle('light-mode', temaSalvo === 'light');
btn.textContent = temaSalvo === 'light' ? '☀️' : '🌙';

// FIX: MUDA NA HORA DO CLICK
btn.addEventListener('click', () => {
  // DESABILITA TRANSITION TEMPORARIAMENTE
  document.body.classList.add('no-transition');
  
  const isLight = document.body.classList.contains('light-mode');
  const novoTema = isLight ? 'dark' : 'light';
  
  // MUDA INSTANTANEAMENTE
  document.body.classList.toggle('light-mode');
  localStorage.setItem('tema', novoTema);
  btn.textContent = novoTema === 'light' ? '☀️' : '🌙';
  
  // REATIVA TRANSITION APÓS 50ms
  setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 50);
});

// ===== TOOLTIP MELHORADO (OPCIONAL) =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

