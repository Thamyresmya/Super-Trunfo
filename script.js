var carta1 = {
  nome: "Bulbasauro",
  imagem:
    "https://i.pinimg.com/736x/56/de/a7/56dea7fea419fc5ab72927ec0455d01f.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "scyther",
  imagem: "https://bleedingcool.com/wp-content/uploads/2020/11/EitJnbZXkAAvp2T-1-copy-42-2-1200x900.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta3 = {
  nome: "eevee",
  imagem:
    "https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/08/pokemon_go_hack_eevee_vaporeon_jolteon_flareon.jpg?resize=1142%2C1142&ssl=1",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 6
  }
};

var carta4 = {
  nome: "Pikachu",
  imagem:
    "https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};

var carta5 = {
  nome: "Charmander",
  imagem:
    "https://www.pokemonunited.nl/img/dex/home/charmander.png",
  atributos: {
    ataque: 5,
    defesa: 7,
    magia: 4
  }
};

var carta6 = {
  nome: "Squertle",
  imagem:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 3
  }
};

var carta7 = {
  nome: "Cubone",
  imagem:
    "https://p.turbosquid.com/ts-thumb/nv/W9TrpD/27JY8pfU/cubone_render_0002/jpg/1478942473/600x600/fit_q87/2040165641d67c863f5c08f4b74400f40ab86d04/cubone_render_0002.jpg",
  atributos: {
    ataque: 6,
    defesa: 5,
    magia: 1
  }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Você Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

