import { personagem } from "./class.js";

const mario = new personagem("Mario", 4, 3, 3);
const Peach = new personagem("Peach", 3, 4, 2);
const Yoshi = new personagem("Yoshi", 4, 4, 2);
const Bowser = new personagem("Bowser", 5 ,2, 5);
const Luigi = new personagem("Luigi", 3, 4, 4);
const DonkeyKong = new personagem("Donkey Kong", 2 , 2, 5);

let pontos1 = 0;
let pontos2 = 0;

const pista = ['reta', 'curva', 'confronto'];
const personagens = [mario, Peach, Yoshi, Bowser, Luigi, DonkeyKong];

function escolherPersonagem() {
  const indice = Math.floor(Math.random() * personagens.length);
  return personagens[indice];
}

function escolherAleatorio(array) {
  const indice = Math.floor(Math.random() * array.length);
  return array[indice];
}

function rolarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Sorteia os personagens apenas uma vez
let primeiro_personagem = escolherPersonagem();
let segundo_personagem = escolherPersonagem();

console.log("🏁 Corrida Mario Kart - Início 🏁");
console.log(`Competidores: ${primeiro_personagem.nome} 🆚 ${segundo_personagem.nome}`);
console.log("----------------------------------------------------");

for (let i = 0; i < 5; i++) {
  let flag = escolherAleatorio(pista);
  console.log(`\n🔹 Rodada ${i + 1} - Tipo de pista: ${flag.toUpperCase()}`);
  console.log(`Competição: ${primeiro_personagem.nome} 🆚 ${segundo_personagem.nome}`);

  let dado1 = rolarDado();
  let dado2 = rolarDado();

  let vencedor = "";
  let valor1 = 0;
  let valor2 = 0;

  if (flag === 'reta') {
    valor1 = primeiro_personagem.velocidade + dado1;
    valor2 = segundo_personagem.velocidade + dado2;
  } else if (flag === 'curva') {
    valor1 = primeiro_personagem.manobrabilidade + dado1;
    valor2 = segundo_personagem.manobrabilidade + dado2;
  } else if (flag === 'confronto') {
    valor1 = primeiro_personagem.poder + dado1;
    valor2 = segundo_personagem.poder + dado2;
  }

  console.log(`${primeiro_personagem.nome} rolou ${dado1} → total: ${valor1}`);
  console.log(`${segundo_personagem.nome} rolou ${dado2} → total: ${valor2}`);

  if (valor1 > valor2) {
    vencedor = primeiro_personagem.nome;
    pontos1++;
  } else if (valor2 > valor1) {
    vencedor = segundo_personagem.nome;
    pontos2++;
  } else {
    vencedor = "Empate";
  }

  console.log(`🏆 Vencedor da rodada: ${vencedor}`);
  console.log("----------------------------------------------------");
}

// Resultado final
console.log("\n🥇 Resultado Final 🥇");
console.log(`${primeiro_personagem.nome} ${pontos1} x ${pontos2} ${segundo_personagem.nome}`);
console.log("🎉 Fim da corrida! 🎉");
