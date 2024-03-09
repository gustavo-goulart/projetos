const monstros = [
  {
    id: 1,
    nome: "Osvaldo",
    altura: 2,
    habilidades:
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas!sit amet consectetur adipisicing elit. Quas!",
    foto: "https://robohash.org/osvaldo",
  },

  {
    id: 2,
    nome: "Neide",
    altura: 1.5,
    habilidades:
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas!sit amet consectetur adipisicing elit. Quas!",
    foto: "https://robohash.org/neide",
  },

  {
    id: 3,
    nome: "Memé",
    altura: 3,
    habilidades:
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas!sit amet consectetur adipisicing elit. Quas!",
    foto: "https://robohash.org/meme",
  },

  {
    id: 4,
    nome: "Brein",
    altura: 5,
    habilidades:
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas!sit amet consectetur adipisicing elit. Quas!",
    foto: "https://robohash.org/brein",
  },
];

const secao = document.querySelector(".monstros");
const botao = document.querySelector(".btn");

botao.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

const todosOsMonstros = monstros.map((monstro) => {
  return `<div>
    <img src="${monstro.foto}">
    <p>Nome: ${monstro.nome}</p>
    <p>Altura: ${monstro.altura}</p>
    <p class="habilidades">Habilidades: ${monstro.habilidades}</p>

  </div>`;
});

secao.innerHTML = todosOsMonstros;
