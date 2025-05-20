// Inicializa o mapa centralizado em São Luís - MA
const mapa = L.map("mapa").setView([-2.5298, -44.3028], 13);

// Camada base do mapa (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(mapa);

// Lista de ecopontos em São Luís
const ecopontos = [
  {
    nome: "Ecoponto - Parque Amazonas (sentido bairro)",
    endereco: "Parque Pindorama",
    coord: [-2.5502233338483578, -44.283568451021985],
  },
  {
    nome: "Ecoponto - Parque Amazonas",
    endereco: "Parque Amazonas",
    coord: [-2.549880351081346, -44.28401906213324],
  },
  {
    nome: "Ecoponto Angelim",
    endereco: "Rua 27, 334-452, Angelim",
    coord: [-2.5313295035882106, -44.23326644493772],
  },
  {
    nome: "Ecoponto Bequimão",
    endereco: "Av. Um, 385-531 - Bequimão",
    coord: [-2.528252339966301, -44.248183473773615],
  },
  {
    nome: "Ecoponto Habitacional Turu",
    endereco: "R. C, 118-226 - Jardim Eldorado",
    coord: [-2.5025122998255656, -44.22718587377358],
  },
  {
    nome: "Ecoponto Jardim América",
    endereco: "Cidade Operária",
    coord: [-2.581766156445941, -44.19292022959337],
  },
  {
    nome: "Ecoponto Jardim Renascença",
    endereco: "Rua Netuno, Jardim Renascença",
    coord: [-2.494392342767358, -44.288511816101504],
  },
  {
    nome: "Ecoponto Residencial Esperança",
    endereco: "Conj. Manoel Beckman, 30 - Res. Esperança",
    coord: [-2.5204473888866956, -44.240729655555015],
  },
  {
    nome: "Ecoponto Cidade Operária",
    endereco: "Cidade Operária",
    coord: [-2.5639927868204664, -44.19997860027544],
  },
  {
    nome: "Ecoponto São Francisco",
    endereco: "Avenida Ferreira Gullar, São Francisco",
    coord: [-2.5114124009830063, -44.30925911610169],
  },
  {
    nome: "Ecoponto Anil",
    endereco: "Rua Dois, 608-648 - Anil",
    coord: [-2.551107215404791, -44.23580336821785],
  },
  {
    nome: "Ecoponto São Raimundo",
    endereco: "R. Dois, 330 - São Raimundo",
    coord: [-2.5939639643506807, -44.23199828128432],
  },
  {
    nome: "Ecoponto Itapiracó",
    endereco: "Avenida Joaquim Mochel - Itapiracó",
    coord: [-2.532340305654522, -44.20287400260948],
  },
  {
    nome: "Ecoponto Parque dos Nobres",
    endereco: "Parque dos Nobres",
    coord: [-2.557929115967309, -44.27688538726522],
  },
  {
    nome: "Ecoponto Barreto",
    endereco: "R. Jorge Damous, 13 - Vila Ivar Saldanha",
    coord: [-2.54432188704111, -44.265324473773525],
  },
  {
    nome: "Ecoponto Primavera",
    endereco: "Cohatrac 3",
    coord: [-2.5400442510836, -44.195672573773564],
  },
  {
    nome: "Ecoponto Cohaserma 2",
    endereco: "Rua Quatorze - Parque Athenas",
    coord: [-2.506727030351073, -44.24765010260932],
  },
  {
    nome: "Ecoponto CEMAR",
    endereco: "Avenida Senador Vitorino Freire",
    coord: [-2.5407788425721827, -44.28876600260921],
  },
  {
    nome: "Ecoponto Vila Isabel",
    endereco: "R. D, 19a - Anjo da Guarda",
    coord: [-2.562024024970923, -44.317631989117444],
  },
  {
    nome: "Ecoponto Cohab Anil",
    endereco: "Avenida Principal, Planalto Anil I",
    coord: [-2.5428609608930546, -44.21347533144555],
  },
];

// Adiciona marcadores dos ecopontos no mapa
ecopontos.forEach((ponto) => {
  L.marker(ponto.coord).addTo(mapa).bindPopup(`
      <strong>${ponto.nome}</strong><br>
      ${ponto.endereco}
    `);
});

const lista = document.getElementById("lista-ecopontos");

ecopontos.forEach((ponto) => {
  // Cria marcador
  const marker = L.marker(ponto.coord)
    .addTo(mapa)
    .bindPopup(`<strong>${ponto.nome}</strong><br>${ponto.endereco}`);

  // Cria item na lista
  const item = document.createElement("li");
  item.innerHTML = `<strong>${ponto.nome}</strong> - ${ponto.endereco}`;
  item.addEventListener("click", () => {
    mapa.setView(ponto.coord, 16);
    marker.openPopup();

    // Scroll suave até o mapa
    const mapaElemento = document.getElementById("mapa");
    mapaElemento.scrollIntoView({ behavior: "smooth" });
  });

  lista.appendChild(item);
});
